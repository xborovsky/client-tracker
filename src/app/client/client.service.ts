import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Client } from './client';

@Injectable()
export class ClientService {

  constructor(private af:AngularFireDatabase) { }

  getClients():FirebaseListObservable<any[]> {
    return this.af.list('clients');
  }

  getClient(id:string):any {
    return this.af.database.ref('clients/' + id).once('value');
  }

  createClient(client:Client):void {
    let ref = this.af.database.ref('clients');
    let newRef = ref.push();
    newRef.set({
      id : newRef.key,
      name : client.getName(),
      surname : client.getSurname(),
      title : client.getTitle(),
      specialization : client.getSpecialization(),
      groupId : client.getGroupId()
    });
  }

  deleteClient(id:string):void {
    this.af.database.ref('clients/' + id).remove();
  }

  updateClient(id:string, clientNew:Client):void {
    this.af.database.ref('clients/' + id).update({
      'name' : clientNew.getName(),
      'surname' : clientNew.getSurname(),
      'title' : clientNew.getTitle(),
      'specialization' : clientNew.getSpecialization(),
      'groupId' : clientNew.getGroupId()
    });
  }

}
