import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteSalonsComponent } from './carte-salons.component';

describe('CarteSalonsComponent', () => {
  let component: CarteSalonsComponent;
  let fixture: ComponentFixture<CarteSalonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteSalonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteSalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
