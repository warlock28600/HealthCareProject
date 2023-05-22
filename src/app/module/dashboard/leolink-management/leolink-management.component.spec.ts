import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeolinkManagementComponent } from './leolink-management.component';

describe('LeolinkManagementComponent', () => {
  let component: LeolinkManagementComponent;
  let fixture: ComponentFixture<LeolinkManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeolinkManagementComponent]
    });
    fixture = TestBed.createComponent(LeolinkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
