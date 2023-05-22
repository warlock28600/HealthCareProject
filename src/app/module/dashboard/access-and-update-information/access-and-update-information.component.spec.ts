import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAndUpdateInformationComponent } from './access-and-update-information.component';

describe('AccessAndUpdateInformationComponent', () => {
  let component: AccessAndUpdateInformationComponent;
  let fixture: ComponentFixture<AccessAndUpdateInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessAndUpdateInformationComponent]
    });
    fixture = TestBed.createComponent(AccessAndUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
