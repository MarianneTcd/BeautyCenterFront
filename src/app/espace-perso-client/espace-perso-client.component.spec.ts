import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersoClientComponent } from './espace-perso-client.component';

describe('EspacePersoClientComponent', () => {
  let component: EspacePersoClientComponent;
  let fixture: ComponentFixture<EspacePersoClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePersoClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePersoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
