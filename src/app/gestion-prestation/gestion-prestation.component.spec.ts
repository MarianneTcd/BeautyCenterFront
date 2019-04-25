import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPrestationComponent } from './gestion-prestation.component';

describe('GestionPrestationComponent', () => {
  let component: GestionPrestationComponent;
  let fixture: ComponentFixture<GestionPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
