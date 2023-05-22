import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserGroupComponent } from './add-user-group.component';

describe('AddUserGroupComponent', () => {
  let component: AddUserGroupComponent;
  let fixture: ComponentFixture<AddUserGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserGroupComponent]
    });
    fixture = TestBed.createComponent(AddUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
