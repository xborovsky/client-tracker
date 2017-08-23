import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  clients:FirebaseListObservable<any[]>; // TODO neslo by lip?

  constructor(private clientService:ClientService, private router:Router) {
    this.clients = clientService.getClients();
  }

  navigateToCreateNew():void {
    this.router.navigate(['/clients/new']);
  }

  navigateToEdit(id:string):void {
    this.router.navigate(['/clients/edit', id]);
  }

  deleteClient(id:string):boolean {
    if (confirm('Do you really want to delete this client?')) {
      this.clientService.deleteClient(id);
      return true;
    }
    return false;
  }

}
