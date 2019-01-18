import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {label: 'Tatouer', icon: 'fa fa-thumb-tack', routerLink: ['/tags']},
      {},
      {label: 'Clients', icon: 'fa fa-handshake-o', routerLink: ['/clients']},
      {label: 'Projets', icon: 'fa fa-briefcase', routerLink: ['/projects']},
      {label: 'Tâches', icon: 'fa fa-tasks', routerLink: ['/tasks']},
      {label: 'Sous-tâches', icon: 'fa fa-bug', routerLink: ['/underTasks']},
      {},
      {label: 'Plannings', icon: 'fa fa-calendar', routerLink: ['/settings']},
      {label: 'Timesheet', icon: 'fa fa-clock-o', routerLink: ['/timesheet']},
      {label: 'Dashboard', icon: 'fa fa-bar-chart', routerLink: ['/login']}, 
      {label: 'Equipes', icon: 'fa fa-users', routerLink: ['/collaborators']},
      {label: 'Settings', icon: 'fa fa-sliders', routerLink: ['/settings']},
      {},
      {label: 'Déconnexion', icon: 'fa fa-sign-out', routerLink: ['/settings']},
    ]
  }

}
