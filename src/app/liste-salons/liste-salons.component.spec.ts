import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSalonsComponent } from './liste-salons.component';

describe('ListeSalonsComponent', () => {
  let component: ListeSalonsComponent;
  let fixture: ComponentFixture<ListeSalonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSalonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
