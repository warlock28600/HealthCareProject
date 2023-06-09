import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOrUpdateUserOptions} from "../dialog/add-or-update-user/options/add-or-update-user.options";
import {AddOrUpdateUserComponent} from "../dialog/add-or-update-user/add-or-update-user.component";

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
    let addOrUpdateUserOptions = new AddOrUpdateUserOptions()
    addOrUpdateUserOptions.user = {}
    addOrUpdateUserOptions.onUpdateOrInsertFinished = () => {

    }
    let addOrUpdateUserComponent = this.matdialog.open(AddOrUpdateUserComponent, {
      height: 'auto',
      width: '100%',
    });
    addOrUpdateUserComponent.componentInstance.addOrUpdateUserOptions = addOrUpdateUserOptions;
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
