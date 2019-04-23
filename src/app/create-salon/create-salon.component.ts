import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { Prestation } from '../model/Prestation';



@Component({
  selector: 'app-create-salon',
  templateUrl: './create-salon.component.html',
  styleUrls: ['./create-salon.component.css']
})
export class CreateSalonComponent implements OnInit {
  data;
  salon: Salon = new Salon();
  prestation: Prestation = new Prestation();
  show = false;
  affCach() {
    this.show = !this.show;
  }

  constructor(private http: Http) { }

  chargeMe(){
    this.http.get('http://localhost:8080/prestations').subscribe(response => {
      this.data = response.json();
    });
  }

  ngOnInit() {
    this.chargeMe();
  }

  createSalon() {
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
    }, err => {
      console.log(err);
    });
  }
  pass = false;
  createPrestation() {
    if (this.prestation.titre == null || 0 || this.prestation.duree == null || 0 || this.prestation.nbPersonnel == null || 0) {
      this.pass = true;
    } else {
      this.pass = false;
      this.http.post('http://localhost:8080/prestations', this.prestation).subscribe(prestationData => {
        console.log(prestationData);
        this.affCach();
        this.chargeMe();
      }, err => {
        console.log(err);
      });
    }

  }

}
