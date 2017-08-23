import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Client, ClientBuilder } from './client';
import { ClientService } from './client.service';

@Injectable()
export class ClientDetailResolve implements Resolve<Client> {

  constructor(private clientService:ClientService, private router:Router) { }

  resolve(route: ActivatedRouteSnapshot):Promise<Client> {
    let id = route.params['id'];
    return this.clientService.getClient(id).then(client => {
      if (!client) {
        return null;
      }
      return new ClientBuilder()
        .withId(client.val().id)
        .withName(client.val().name)
        .withSurname(client.val().surname)
        .withTitle(client.val().title)
        .withSpecialization(client.val().specialization)
        .build();
    });
  }
}
