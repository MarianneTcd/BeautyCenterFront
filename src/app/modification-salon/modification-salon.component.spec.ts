import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSalonComponent } from './modification-salon.component';

describe('ModificationSalonComponent', () => {
  let component: ModificationSalonComponent;
  let fixture: ComponentFixture<ModificationSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
