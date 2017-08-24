import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  group:Group;
  private editGroupForm: FormGroup;
  private name: FormControl;
  private sub:any;

  constructor(
    private groupService:GroupService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.data.subscribe((data: { group: Group }) => {
      this.group = data.group;
    });
    this.createForm();
  }

  createForm():void {
    this.name = new FormControl(this.group.getName(), Validators.compose([Validators.required, Validators.minLength(3)]));
    this.editGroupForm = new FormGroup({
      name: this.name
    });
  }

  onSubmit(formValues:any):void {
    if (this.editGroupForm.valid) {
      this.groupService.updateGroup(
        this.group, formValues.name
      );
      this.editGroupForm.reset();
      this.router.navigate(['/groups']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
