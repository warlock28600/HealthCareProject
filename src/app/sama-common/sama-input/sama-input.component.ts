import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StringUtil} from "../../util/string.util";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sama-input',
  templateUrl: './sama-input.component.html',
  styleUrls: ['./sama-input.component.scss']
})
export class SamaInputComponent implements OnInit {

  @Input()
  value?: any;
  @Input()
  title?: string;
  @Input()
  placeHolder?: string;
  @Input()
  required: boolean = false;
  @Input()
  disabled: boolean = false;
  @Input()
  type?: string;
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();
  @Input()
  lookup?: string;

  originalType?: string;

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.originalType = this.type;
  }

  onChange() {
    if (this.type !== 'number') {
      let temp = StringUtil.reformatString(this.value);
      this.valueChange.emit(temp);
    } else {
      this.valueChange.emit(this.value);
    }
  }

  // onLookupClicked() {
  //   switch (this.lookup) {
  //     case 'student':
  //       let selectStudentOptions = new SelectStudentOptions();
  //       selectStudentOptions.onStudentSelected = (student) => {
  //         this.valueChange.emit(student.StudentNumber);
  //       };
  //       let selectStudentComponent = this.matDialog.open(SelectStudentComponent, {
  //         height: 'auto',
  //         width: '100%'
  //       });
  //       selectStudentComponent.componentInstance.selectStudentOptions = selectStudentOptions;
  //       break;
  //     case 'professor':
  //       let selectProfessorOptions = new SelectProfessorOptions();
  //       selectProfessorOptions.onProfessorSelected = (professor) => {
  //         this.valueChange.emit(professor.ProfessorCode);
  //       };
  //       let selectProfessorComponent = this.matDialog.open(SelectProfessorComponent, {
  //         height: 'auto',
  //         width: '100%'
  //       });
  //       selectProfessorComponent.componentInstance.selectProfessorOptions = selectProfessorOptions;
  //       break;
  //     case 'lesson':
  //       let selectLessonOptions = new SelectLessonOptions();
  //       selectLessonOptions.onLessonSelected = (lesson) => {
  //         this.valueChange.emit(lesson.LessonCode);
  //       };
  //       let selectLessonComponent = this.matDialog.open(SelectLessonComponent, {
  //         height: 'auto',
  //         width: '100%'
  //       });
  //       selectLessonComponent.componentInstance.selectLessonOptions = selectLessonOptions;
  //       break;
  //   }
  // }
}
