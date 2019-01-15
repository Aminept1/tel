import { Component } from '@angular/core';

import { ClientsService } from '../../src/app/services/clients.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'telescope';
  clients: any;
  message : any;  

  constructor(private clientsService : ClientsService) { }
  
  ngOnInit() {
    this.OnLoadClients(); 
  }

  OnLoadClients() {

    this.clientsService.getClients()
    .subscribe(
      data => {this.clients = data ; this.newMessage(); console.log("App - OnLoadClients Done");},
      err  => {console.log(err);}
    )
  }

  newMessage() {
    this.clientsService.changeShared(this.clients); 
  }


}
