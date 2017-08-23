import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './firebase.config';

import { RouterModule } from '@angular/router';
import { routesConfig } from './router.config';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientDetailResolve } from './client/client-detail.resolve.service';
import { ClientService } from './client/client.service';

import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupCreateComponent } from './group/group-create/group-create.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ClientListComponent,
    ClientDetailComponent,
    ClientCreateComponent,
    ClientEditComponent,
    GroupListComponent,
    GroupCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [AngularFireDatabase, ClientDetailResolve, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
