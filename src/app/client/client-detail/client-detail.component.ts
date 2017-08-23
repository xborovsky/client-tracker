import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from '../client'; 

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {

  client:Client;
  private sub:any;

  constructor(private router:Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
    });
  }

  navigateToEdit():void {
    this.router.navigate(['clients/edit/', this.client.getId()]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
