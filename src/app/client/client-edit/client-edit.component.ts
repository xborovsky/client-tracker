import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client:Client;
  private sub:any;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
      console.log(this.client);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
