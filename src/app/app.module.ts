import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

// PrimeNG Moduls
import {MenuModule, PanelModule, DataTableModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {SidebarModule} from 'primeng/sidebar';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SpinnerModule} from 'primeng/spinner';


import {MenuItem} from 'primeng/api';

// CLI
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MultiSelectModule} from 'primeng/multiselect';

// Material
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';

import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';

// SERVICES
import { LoginService } from './services/login.service';
import { ClientsService } from './services/clients.service';

// rxjs
import { HttpClientModule } from '@angular/common/http';
import { TagsComponent } from './components/tags/tags.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { UnderTasksComponent } from './components/under-tasks/under-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LoginComponent,
    HomeComponent,
    ClientsComponent,
    ProjectsComponent,
    TasksComponent,
    TagsComponent,
    CollaboratorsComponent,
    UnderTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    MenuModule,
    DataTableModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    SidebarModule,
    DropdownModule,
    ProgressSpinnerModule,
    CalendarModule, 
    MultiSelectModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    InputSwitchModule,
    SpinnerModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpModule,
    routing, 
    FormsModule, 
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
    
  ],
  providers: [
    LoginService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
