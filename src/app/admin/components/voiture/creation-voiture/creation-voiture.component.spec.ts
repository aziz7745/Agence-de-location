import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationVoitureComponent } from './creation-voiture.component';

describe('CreationVoitureComponent', () => {
  let component: CreationVoitureComponent;
  let fixture: ComponentFixture<CreationVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationVoitureComponent]
    });
    fixture = TestBed.createComponent(CreationVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
