import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CollaboratorsComponent} from './components/collaborators/collaborators.component';
import {TagsComponent} from './components/tags/tags.component';
import {UnderTasksComponent} from './components/under-tasks/under-tasks.component';

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
		path: 'tags',
		component: TagsComponent
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
		path: 'underTasks',
		component: UnderTasksComponent
	},
	{
		path: 'collaborators',
		component: CollaboratorsComponent
	},
	{
		path: 'settings',
		component: SettingsComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);