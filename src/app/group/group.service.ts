import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Group } from './group';

@Injectable()
export class GroupService {

  constructor(private af:AngularFireDatabase) { }

  getGroup(id:String):any {
    return this.af.database.ref('groups/' + id).once('value');
  }

  createGroup(group:Group):void {
    let ref = this.af.database.ref('groups');
    let newRef = ref.push();
    newRef.set({
      id : newRef.key,
      name : group.getName(),
      create : group.getCreated()
    });
  }

  deleteGroup(id:String):void {
    this.af.database.ref('groups/' + id).remove();
  }

  updateGroup(group:Group, newName:string):void {
    this.af.database.ref('groups/' + group.getId()).update({'name' : newName});
  }

}
