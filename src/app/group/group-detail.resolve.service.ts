import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Group } from './group';
import { GroupService } from './group.service';

@Injectable()
export class GroupDetailResolve implements Resolve<Group> {

  constructor(private groupService:GroupService, private router:Router) { }

  resolve(route: ActivatedRouteSnapshot):Promise<Group> {
    let id = route.params['id'];
    return this.groupService.getGroup(id).then(group => {
      if (!group) {
        return null;
      }
      return new Group(
        group.val().id,
        group.val().name,
        group.val().created
      );
    });
  }

}
