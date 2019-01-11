import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { SortEvent } from "primeng/components/common/sortevent";
import { PaginatorModule } from "primeng/paginator";
import { DialogModule } from "primeng/dialog";

import { Router } from "@angular/router";

import { Project } from "../../../models/models.project";

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {


  msg : any; 
  clients: any; 

  star = 'fa fa-plus';
  //CRUD
  displayDialog: boolean;
  project: Project;
  selectedProject: Project;
  newProject: boolean;

  liste = [
    { id:1, name: 'aaaaaa', groupe: 'zzz', nombreprojets: 1, nombretaches: 1000},
    { id:2, name: 'bbbbb', groupe: 'zzzzz App', nombreprojets: 2, nombretaches: 1000},

  ];


  projects = [
    {
      id: 1,
      name: "FitNesse",
      client: "Local",
      startDate: "1",
      duration: "3"
    },
    {
      id: 2,
      name: "AFP",
      client: "AFP",
      startDate: "1",
      duration: "3"
    },
    {
      id: 1,
      name: "EPEL",
      client: "AMALPHIE",
      startDate: "1",
      duration: "3"
    },

  ];

  cols = [
    { field: 'name', header: 'Nom / libellé' },
    { field: 'client', header: 'Client' },
    { field: 'startDate', header: 'Date de démarrage' },
    { field: 'duration', header: 'Durée estimée' },
  ];

  constructor(private router: Router, private clientsService : ClientsService) {}

  ngOnInit() {
    this.clientsService.currentShare.subscribe(m => this.msg = m);   
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === "string" && typeof value2 === "string")
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }

  afficher() {
    if (confirm("Vous désirez vraiment faire l'opération ?")) {
      console.log("oui");
    } else {
      console.log("non");
    }
  }

  // CRUD

  showDialogToAdd() {
    this.newProject = true;
    this.project = {
      id: null,
      name: "",
      client : "",
      startDate: "",
      duration: ""
    };
    this.displayDialog = true;
  }

  save() {
    console.log("save a");
    let cars = [...this.projects];
    if (this.newProject) cars.push(this.project);
    else cars[this.projects.indexOf(this.selectedProject)] = this.project;

    this.projects = cars;
    this.project = null;
    this.displayDialog = false;
    console.log("save b");
  }

  delete() {
    console.log("delete a");
    let index = this.projects.indexOf(this.selectedProject);
    this.projects = this.projects.filter((val, i) => i != index);
    this.project = null;
    this.displayDialog = false;
    console.log("delete b");
  }

  onRowSelect(event) {
    this.selectedProject = event.data;
    this.newProject = false;
    this.project = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Project): Project {
    let project = {
      id: null,
      name: "",
      client: "",
      startDate: null,
      duration: null
    };
    for (let prop in c) {
      project[prop] = c[prop];
    }
    return project;
  }

}
