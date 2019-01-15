import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { SortEvent } from 'primeng/components/common/sortevent';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


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
  refrechTrigger : boolean; 
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
    { field: 'nbPprojects', header: 'N. Projets' },
    { field: 'nbTasks', header: 'N. Taches' },
  ];

  constructor(private router: Router, private http: Http, private clientsService : ClientsService) { }

  ngOnInit() {

    this.OnLoadClients(); 

  }

  OnLoadClients() {

    this.clientsService.getClients()
    .subscribe(
      data => {this.clients = data ; console.log("------------------------"); console.log(data);},
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
    this.client = {id:null, name: '', groupe: '', nbPprojects: null, nbTasks: null, nbUnderTasks: null, projects: null};;
    this.displayDialog = true;
  }

  save() {
    let repository = [...this.clients];
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
    this.displayDialog = false;
}

onRowSelect(event) {
    this.selectedClient = event.data; 
    this.newClient = false;
    this.client = this.cloneClient(event.data);
    this.displayDialog = true;
}

cloneClient(c: Client): Client {
    let client = {id:null, name: '', groupe: '', nbPprojects: null, nbTasks: null, nbUnderTasks: null, projects: null};
    for (let prop in c) {
      client[prop] = c[prop];
    }
    return client;
}

newMessage() {
  this.clientsService.changeShared(this.clients); 
}

async  refreche() {
  
  console.log("wait");
  this.refrechTrigger = true;
  await this.sleep(1000);   
  location.reload();
  console.log("ref");
  
}



   sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



}
