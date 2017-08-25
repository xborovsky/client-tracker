import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Group } from './group';

@Injectable()
export class GroupService {

  constructor(private af:AngularFireDatabase) { }

  getAllGroups():FirebaseListObservable<any[]> {
    return this.af.list('groups');
  }

  getGroup(id:string):any {
    return this.af.database.ref('groups/' + id).once('value');
  }

  createGroup(group:Group):void {
    let ref = this.af.database.ref('groups');
    let newRef = ref.push();
    newRef.set({
      id : newRef.key,
      name : group.getName(),
      created : group.getCreated()
    });
  }

  deleteGroup(id:string):void {
    this.af.database.ref('groups/' + id).remove();
  }

  updateGroup(group:Group, newName:string):void {
    this.af.database.ref('groups/' + group.getId()).update({'name' : newName});
  }

}
