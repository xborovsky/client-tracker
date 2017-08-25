import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from '../client'; 
import { Group } from '../../group/group';
import { GroupService } from '../../group/group.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {

  client:Client;
  group:Group;
  private sub:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private groupService:GroupService) {
  }

  ngOnInit() {
    this.sub = this.route.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
      this.groupService.getGroup(this.client.getGroupId()).then(group => {
        if (group) {
          this.group =  new Group(
            group.val().id,
            group.val().name,
            group.val().created
          );
        }
      });
    });
  }

  navigateToEdit():void {
    this.router.navigate(['clients/edit/', this.client.getId()]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
