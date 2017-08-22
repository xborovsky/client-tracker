import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css'],
  providers: [GroupService]
})
export class GroupCreateComponent implements OnInit {

  private newGroupForm: FormGroup;
  private name: FormControl;

  constructor(private router:Router, private af:AngularFireDatabase, private groupService:GroupService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm():void {
    this.name = new FormControl('', Validators.required);
    this.newGroupForm = new FormGroup({
      name: this.name
    });
  }

  onSubmit(formValues:any):void {
    if (this.newGroupForm.valid) {
      this.groupService.createGroup(
        new Group(formValues.name, new Date())
      );
      this.newGroupForm.reset();
      this.router.navigate(['/groups']);
    }
  }

}
