import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Client } from './client';

@Injectable()
export class ClientService {

  constructor(private af:AngularFireDatabase) { }

  createClient(client:Client):void {
    let ref = this.af.database.ref('clients');
    ref.push({
      name : client.getName(),
      surname : client.getSurname(),
      title : client.getTitle(),
      specialization : client.getSpecialization()
    });
  }

  deleteClient():void {}

  updateClient():Client {
    return null;
  }

}
