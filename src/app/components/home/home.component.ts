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
      {label: 'Dashboard', icon: 'fa fa-home', routerLink: ['/login']},
      {label: 'Clients', icon: 'fa fa-tasks', routerLink: ['/clients']},
      {label: 'Projets', icon: 'fa fa-tasks', routerLink: ['/projects']},
      {label: 'Tâches', icon: 'fa fa-tasks', routerLink: ['/tasks']},
      {label: 'Opérations', icon: 'fa fa-tasks', routerLink: ['/operations']},
      {},
      {label: 'Plannings', icon: 'fa fa-calendar', routerLink: ['/settings']},
      {label: 'Timesheet', icon: 'fa fa-clock-o', routerLink: ['/timesheet']}, 
      {label: 'Settings', icon: 'fa fa-sliders', routerLink: ['/settings']},
      {label: 'Equipes', icon: 'fa fa-users', routerLink: ['/profile']},
      {},
      {label: 'Déconnexion', icon: 'fa fa-sliders', routerLink: ['/settings']},
    ]
  }

}
