import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  clients:FirebaseListObservable<any[]>;

  constructor(private af:AngularFireDatabase, private router:Router) {
    this.clients = af.list('clients');
  }

  navigateToCreateNew():void {
    this.router.navigate(['/clients/new']);
  }

}
