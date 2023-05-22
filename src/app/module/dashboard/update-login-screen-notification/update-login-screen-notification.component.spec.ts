import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginScreenNotificationComponent } from './update-login-screen-notification.component';

describe('UpdateLoginScreenNotificationComponent', () => {
  let component: UpdateLoginScreenNotificationComponent;
  let fixture: ComponentFixture<UpdateLoginScreenNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLoginScreenNotificationComponent]
    });
    fixture = TestBed.createComponent(UpdateLoginScreenNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
