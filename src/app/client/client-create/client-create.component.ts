import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';

import { Client, ClientBuilder } from '../client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  private newClient: Client;
  private newClientForm: FormGroup;
  private name: FormControl;
  private surname: FormControl;
  private title: FormControl;
  private specialization: FormControl;

  constructor(private router:Router, private clientService:ClientService) {
    this.newClient = new ClientBuilder().build();
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm():void {
    this.name = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.title = new FormControl('', Validators.required);
    this.specialization = new FormControl('');
    this.newClientForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      title: this.title,
      specialization: this.specialization
    });
  }

  onSubmit(formValues:any):void {
    if (this.newClientForm.valid) {
      this.clientService.createClient(
        new ClientBuilder()
          .withName(formValues.name)
          .withSurname(formValues.surname)
          .withTitle(formValues.title)
          .withSpecialization(formValues.specialization)
          .build()
      );
      this.newClientForm.reset();
      this.router.navigate(['/clients']);
    }
  }

}
