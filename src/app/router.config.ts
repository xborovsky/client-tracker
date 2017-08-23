import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';

import {ClientDetailResolve} from './client/client-detail.resolve.service';

export const routesConfig: Routes = [
  { path : '', redirectTo: 'welcome', pathMatch : 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: ClientCreateComponent },
  { path: 'clients/:id', component: ClientDetailComponent, resolve : { client :  ClientDetailResolve} },
  { path: 'clients/edit/:id', component: ClientEditComponent, resolve : { client :  ClientDetailResolve} },
  { path: 'groups', component : GroupListComponent },
  { path: 'groups/new', component : GroupCreateComponent },
  { path: 'welcome', component : WelcomeComponent }
];
