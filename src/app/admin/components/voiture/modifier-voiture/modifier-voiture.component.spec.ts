import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVoitureComponent } from './modifier-voiture.component';

describe('ModifierVoitureComponent', () => {
  let component: ModifierVoitureComponent;
  let fixture: ComponentFixture<ModifierVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierVoitureComponent]
    });
    fixture = TestBed.createComponent(ModifierVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
