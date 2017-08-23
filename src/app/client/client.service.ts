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
      specialization : client.getSpecialization()
    });
  }

  deleteClient(id:string):void {
    this.af.database.ref('clients/' + id).remove();
  }

  updateClient():Client {
    return null;
  }

}
