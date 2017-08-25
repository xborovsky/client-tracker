import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
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

  constructor(private router:Router, private groupService:GroupService) {
    this.groups = groupService.getAllGroups();
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
