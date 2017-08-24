import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {

  groups:FirebaseListObservable<any[]>;

  constructor(private af:AngularFireDatabase, private router:Router, private groupService:GroupService) {
    this.groups = af.list("groups");
  }

  navigateToCreateNew():void {
    this.router.navigate(['/groups/new']);
  }

  deleteGroup(id:string):boolean {
    if (confirm('Do you really want to delete the selected group?')) {
      this.groupService.deleteGroup(id);
      return true;
    }
    return false;
  } 

  navigateToEdit(id:string):void {
    this.router.navigate(['groups/edit', id]);
  }

}
