import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersoManagerComponent } from './espace-perso-manager.component';

describe('EspacePersoManagerComponent', () => {
  let component: EspacePersoManagerComponent;
  let fixture: ComponentFixture<EspacePersoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePersoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePersoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
