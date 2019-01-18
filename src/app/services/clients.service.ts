import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

 
import { Client } from '../../models/models.client'; 

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  private share =new BehaviorSubject<any>([]);
  currentShare = this.share.asObservable();    

  public host: string = "http://localhost:8056"; 

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> { 
    return this.http.get(this.host+"/clients"); 
  }

  saveClient(client : Client) { 
    return this.http.post(this.host+"/clients",client);
  }

  deleteClient(id : any) { 
    return this.http.delete(this.host+"/clients/"+id);
  }

  changeShared(cs: any) {
    this.share.next(cs);
    console.log("changeShared Done");
  }

}
