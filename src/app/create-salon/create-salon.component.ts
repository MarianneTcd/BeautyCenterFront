import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { Prestation } from '../model/Prestation';
import { Event } from '../model/Event';



@Component({
  selector: 'app-create-salon',
  templateUrl: './create-salon.component.html',
  styleUrls: ['./create-salon.component.css']
})
export class CreateSalonComponent implements OnInit {

  show = false;
  affCach() {
    this.show = !this.show;
  }

  constructor(private http: Http) { }

  data;
  chargeListe() {
    this.http.get('http://localhost:8080/prestations').subscribe(response => {
      this.data = response.json();
    });
  }

  ngOnInit() {
    this.chargeListe();
  }


  salon: Salon = new Salon();
  createSalon() {
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
    }, err => {
      console.log(err);
    });
  }

  event: Event = new Event();
  
  createEvent() {

    console.log(this.event)
    /*this.http.post('http://localhost:8080/events', this.event).subscribe(eventData => {
      console.log(eventData);
    }, err => {
      console.log(err);
    });*/
  }

  prestation: Prestation = new Prestation();
  pass = false;
  createPrestation() {
    if (this.prestation.titre == null || 0 || this.prestation.duree == null || 0 || this.prestation.nbPersonnel == null || 0) {
      this.pass = true;
    } else {
      this.pass = false;
      this.http.post('http://localhost:8080/prestations', this.prestation).subscribe(prestationData => {
        console.log(prestationData);
        this.affCach();
        this.chargeListe();
      }, err => {
        console.log(err);
      });
    }

  }

}
