import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Client, ClientBuilder } from '../client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {

  private client: Client;
  private editClientForm: FormGroup;
  private name: FormControl;
  private surname: FormControl;
  private title: FormControl;
  private specialization: FormControl;
  private sub:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private clientService:ClientService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
    });
    this.createForm();
  }

  private createForm():void {
    this.name = new FormControl(this.client.getName(), Validators.required);
    this.surname = new FormControl(this.client.getSurname(), Validators.required);
    this.title = new FormControl(this.client.getTitle(), Validators.required);
    this.specialization = new FormControl(this.client.getSpecialization());
    this.editClientForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      title: this.title,
      specialization: this.specialization
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
