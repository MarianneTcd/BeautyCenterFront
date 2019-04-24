import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceNonUserComponent } from './espace-non-user.component';

describe('EspaceNonUserComponent', () => {
  let component: EspaceNonUserComponent;
  let fixture: ComponentFixture<EspaceNonUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceNonUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceNonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
