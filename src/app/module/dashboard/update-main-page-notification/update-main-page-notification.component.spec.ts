import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMainPageNotificationComponent } from './update-main-page-notification.component';

describe('UpdateMainPageNotificationComponent', () => {
  let component: UpdateMainPageNotificationComponent;
  let fixture: ComponentFixture<UpdateMainPageNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMainPageNotificationComponent]
    });
    fixture = TestBed.createComponent(UpdateMainPageNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
