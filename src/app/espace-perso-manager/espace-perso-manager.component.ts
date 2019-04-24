import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';

@Component({
  selector: 'app-espace-perso-manager',
  templateUrl: './espace-perso-manager.component.html',
  styleUrls: ['./espace-perso-manager.component.css']
})
export class EspacePersoManagerComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  creation = false;
  salon: Salon = new Salon();
  createSalon() {
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
      this.creation = true;
    }, err => {
      console.log(err);
    });
  }
}
