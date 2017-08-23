import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Group } from './group';

@Injectable()
export class GroupService {

  constructor(private af:AngularFireDatabase) { }

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

}
