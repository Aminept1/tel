import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ClientsComponent} from './components/clients/clients.component';
import {NewClientComponent} from './components/new-client/new-client.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {NewTaskComponent} from './components/new-task/new-task.component';

const appRoutes: Routes = [
	{
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'clients',
		component: ClientsComponent
	},
	{
		path: 'projects',
		component: ProjectsComponent
	},
	{
		path: 'tasks',
		component: TasksComponent
	},
	{
		path: 'settings',
		component: SettingsComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);