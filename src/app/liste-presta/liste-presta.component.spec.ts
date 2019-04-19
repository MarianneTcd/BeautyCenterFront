import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrestaComponent } from './liste-presta.component';

describe('ListePrestaComponent', () => {
  let component: ListePrestaComponent;
  let fixture: ComponentFixture<ListePrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
