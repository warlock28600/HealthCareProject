import {Component} from '@angular/core';
import {AddUserGroupOptions} from "./options/add-user-group.options";

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.scss']
})
export class AddUserGroupComponent {
  addUserGroupOptions = new AddUserGroupOptions()

  constructor() {
  }

  onSubmitClicked() {

  }

  noAction() {

  }
}
