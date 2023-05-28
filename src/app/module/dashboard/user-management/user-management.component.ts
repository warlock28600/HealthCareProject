import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUserGroupOptions} from "../add-user-group/options/add-user-group.options";
import {AddUserGroupComponent} from "../add-user-group/add-user-group.component";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  userName?: any = '';
  user?: any;
  userList: any = [];
  userDisplayColumn = ['نام و نام خانوادگی', 'نام کاربری', 'تاریخ ایجاد', 'تاریخ آحرین ورود', 'مسدود'];
  userDisplayColumnType = [];
  userDisplayDataSource = [];
  protected readonly event = event;

  constructor(private matdialog: MatDialog) {
  }

  onUserSelected(user: any) {
    this.user = user
  }

  onAddUserClicked() {
    let addUserGroupOptions = new AddUserGroupOptions()
    addUserGroupOptions.user = {}
    addUserGroupOptions.onUpdateAndInsertFinished = () => {

    }
    let addUserGroupComponent = this.matdialog.open(AddUserGroupComponent, {
      height: 'auto',
      width: '100%',

    });
  }

  onUpdateUserClicked() {

  }

  onDeleteUserClicked() {

  }

  // onCreateTermSchedulesClick() {
  //   let addOrUpdateEducationTermSchedulesOptions = new AddOrUpdateEducationTermSchedulesOptions();
  //   addOrUpdateEducationTermSchedulesOptions.termSchedule = {};
  //   addOrUpdateEducationTermSchedulesOptions.onUpdateOrInsertFinished = () => {
  //     this.loadOnline();
  //   };
  //   let addOrUpdateEducationTermSchedulesComponent = this.matDialog.open(AddOrUpdateEducationTermSchedulesComponent, {
  //     height: 'auto',
  //     width: '100%'
  //   });
  //   addOrUpdateEducationTermSchedulesComponent.componentInstance.addOrUpdateEducationTermSchedulesOptions = addOrUpdateEducationTermSchedulesOptions;
  // }
}
