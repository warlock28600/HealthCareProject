import {Component} from '@angular/core';
import {AddOrUpdateUserOptions} from "./options/add-or-update-user.options";


@Component({
  selector: 'app-add-or-update-user',
  templateUrl: './add-or-update-user.component.html',
  styleUrls: ['./add-or-update-user.component.scss']
})
export class AddOrUpdateUserComponent {

  firstNameAndLastName?: any;


  addOrUpdateUserOptions = new AddOrUpdateUserOptions()

  onSubmitClicked() {

  }

  noAction() {

  }

}
