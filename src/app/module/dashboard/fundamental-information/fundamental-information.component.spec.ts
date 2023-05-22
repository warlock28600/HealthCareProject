import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalInformationComponent } from './fundamental-information.component';

describe('FundamentalInformationComponent', () => {
  let component: FundamentalInformationComponent;
  let fixture: ComponentFixture<FundamentalInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundamentalInformationComponent]
    });
    fixture = TestBed.createComponent(FundamentalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
