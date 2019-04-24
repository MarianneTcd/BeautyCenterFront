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
    this.chargeListeSalons();
  }

  dataSalons;
  chargeListeSalons() {
    this.http.get('http://localhost:8080/salons').subscribe(response => {
      this.dataSalons = response.json();
    });
  }

  creation = false;
  salon: Salon = new Salon();
  createSalon() {
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
      this.creation = true;
      this.chargeListeSalons();
    }, err => {
      console.log(err);
    });
  }
}
