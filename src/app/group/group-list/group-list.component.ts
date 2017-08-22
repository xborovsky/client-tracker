import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {

  groups:FirebaseListObservable<any[]>;

  constructor(private af:AngularFireDatabase, private router:Router) {
    this.groups = af.list("groups");
  }

  navigateToCreateNew():void {
    this.router.navigate(['/groups/new']);
  }

}
