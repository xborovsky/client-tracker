import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Client, ClientBuilder } from '../client';
import { ClientService } from '../client.service';

import { Group } from '../../group/group';
import { GroupService } from '../../group/group.service';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {

  private client: Client;
  private allGroups:any[];
  private editClientForm: FormGroup;
  private name: FormControl;
  private surname: FormControl;
  private title: FormControl;
  private specialization: FormControl;
  private group:FormControl;
  private sub:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private clientService:ClientService,
    private groupService:GroupService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
    });
    this.groupService.getAllGroups().subscribe(groups => {
      this.allGroups = groups;
    });
    this.createForm();
  }

  private createForm():void {
    this.name = new FormControl(this.client.getName(), Validators.required);
    this.surname = new FormControl(this.client.getSurname(), Validators.required);
    this.title = new FormControl(this.client.getTitle(), Validators.required);
    this.specialization = new FormControl(this.client.getSpecialization());
    this.group = new FormControl(this.client.getGroupId(), Validators.required);
    this.editClientForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      title: this.title,
      specialization: this.specialization,
      group : this.group
    });
  }

  onSubmit(formValues:any):void {
    if (this.editClientForm.valid) {
      this.clientService.updateClient(
        this.client.getId(),
        new ClientBuilder()
          .withName(formValues.name)
          .withSurname(formValues.surname)
          .withTitle(formValues.title)
          .withSpecialization(formValues.specialization)
          .withGroupId(formValues.group)
          .build()
      );
      this.editClientForm.reset();
      this.router.navigate(['/clients']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
