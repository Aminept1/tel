import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { SortEvent } from 'primeng/components/common/sortevent';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';

import { Router } from '@angular/router'; 
import { Http } from '@angular/http'; 

import { Client } from '../../../models/models.client'; 
import { ClientsService } from '../../services/clients.service'; 

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  msg : any; 

   //CRUD

  displayDialog: boolean;
  client: Client ;
  selectedClient: Client;
  newClient: boolean;
  clients: any; 

  cols = [
    { field: 'name', header: 'Nom' },
    { field: 'groupe', header: 'Groupe' },
    { field: 'nb_projects', header: 'N. Projets' },
    { field: 'nb_tasks', header: 'N. Taches' },
  ];

  constructor(private router: Router, private http: Http, private clientsService : ClientsService) { }

  ngOnInit() {

    this.OnLoadClients(); 
    // console.log("yyyyyyyyyyyyyyy");
    // console.log(this.clients);
    // this.newMessage();

  }

  OnLoadClients() {

    this.clientsService.getClients()
    .subscribe(
      data => {this.clients = data ; this.newMessage(); console.log("Done");},
      err  => {console.log(err);}
    )
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
  }

  newProject() {
    this.router.navigateByUrl('/login');
  }

  // CRUD

  showDialogToAdd() {
    this.newClient = true;
    this.client = {id:null, name: '', groupe: '', nb_projects: null, nb_tasks: null};;
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.clients];
    if (this.newClient){
        console.log(this.client);
        this.clientsService.saveClient(this.client)
        .subscribe(
          data => {console.log("Save OK"); this.OnLoadClients();},
          err  => {console.log("Save KO");}
        )
        this.displayDialog = false;       
    }  
    else {
        this.clientsService.saveClient(this.client)
        .subscribe(
          data => {console.log("Update OK");this.OnLoadClients();},
          err  => {console.log("Update KO");}
        )
        this.displayDialog = false;
        }             
}

delete() {
     this.clientsService.deleteClient(this.client.id)
        .subscribe(
          data => {console.log("Delete OK");this.OnLoadClients();},
          err  => {console.log("Delete KO");}
        )
    //this.client = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.selectedClient = event.data; 
    this.newClient = false;
    this.client = this.cloneCar(event.data);
    this.displayDialog = true;
}

cloneCar(c: Client): Client {
    let client = {id: null, name: '', groupe: '', nb_projects: null, nb_tasks: null};
    for (let prop in c) {
      client[prop] = c[prop];
    }
    return client;
}

newMessage() {
  this.clientsService.changeShared(this.clients); 
}


}
