import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { Event } from '../model/Event';

@Component({
  selector: 'app-gestion-prestation',
  templateUrl: './gestion-prestation.component.html',
  styleUrls: ['./gestion-prestation.component.css']
})
export class GestionPrestationComponent implements OnInit {

  constructor(private http: Http, private serv: SalonservicesService) { }
  id = this.serv.id;

  ngOnInit() {
    this.chargeListePrestaSalon(this.id);
    this.chargeListePresta();
    console.log('id du salon qui suit', this.id);

  }

  //LISTE PRESTA DU SALON
  dataPrestaSalon;
  chargeListePrestaSalon(id) {
    this.http.get('http://localhost:8080/events/salon/' + id).subscribe(response => {
      this.dataPrestaSalon = response.json();
    });
  }

  //LISTE DE TOUTES LES PRESTA
  dataPresta;
  chargeListePresta() {
    this.http.get('http://localhost:8080/prestations').subscribe(response => {
      this.dataPresta = response.json();
    });
  }


  //RECUPERATION INFO PRESTAS
  stockage;
  getPresta(id) {
    this.http.get('http://localhost:8080/prestations/' + id).subscribe(response => {
      this.stockage = response.json();
      console.log('id presta stockée', this.stockage.id);
    }
  }


  //CREATION EVENT
  event: Event = new Event();
  createEvent() {
    this.event.salon = this.serv.id;
    this.event.presta = this.stockage.id;
    console.log('id salon envoyé', this.event.salon);
    console.log('id presta envoyé', this.event.presta);
    this.http.post('http://localhost:8080/events', this.event).subscribe(eventData => {
      console.log(eventData);
      this.chargeListePrestaSalon(this.serv.id);
      this.chargeListePresta();
    }, err => {
      console.log(err);
    });

  }
}
