import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationReservationComponent } from './creation-reservation.component';

describe('CreationReservationComponent', () => {
  let component: CreationReservationComponent;
  let fixture: ComponentFixture<CreationReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationReservationComponent]
    });
    fixture = TestBed.createComponent(CreationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
