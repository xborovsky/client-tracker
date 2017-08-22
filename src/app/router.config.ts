import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';

import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';

export const routesConfig: Routes = [
  { path : '', redirectTo: 'welcome', pathMatch : 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: ClientCreateComponent },
  { path: 'clients/:id', component: ClientDetailComponent },
  { path: 'groups', component : GroupListComponent },
  { path: 'groups/new', component : GroupCreateComponent },
  { path: 'welcome', component : WelcomeComponent }
];
