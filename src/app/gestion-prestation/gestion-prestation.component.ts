import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { Event } from '../model/Event';
import { Prestation } from '../model/Prestation';
import { Salon } from '../model/Salon';

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


  //RECUPERATION POUR EVENT
  recupEvent(idPresta) {

    this.http.get('http://localhost:8080/prestations/' + idPresta).subscribe(responseP => {
      this.event.presta = responseP.json();
      console.log('id presta envoyé1', this.event.presta);
    }, err => {
      console.log(err)});

    this.http.get('http://localhost:8080/salons/' + this.serv.id).subscribe(responseS => {
      this.event.salon = responseS.json();
      console.log('id salon envoyé1', this.event.salon);
    }, err => {
      console.log(err)});
  }


  //CREATION EVENT
    event: Event = new Event();
    createEvent(){
    this.http.post('http://localhost:8080/events', this.event).subscribe(eventData => {
      console.log(eventData);
      this.chargeListePrestaSalon(this.id);
      this.chargeListePresta();
    }, err => {
      console.log(err);
    });
  }

  //SUPPRESION EVENT
  supEvent(idPresta) {
    this.http.delete('http://localhost:8080/events/presta/'+ idPresta).subscribe(responseP => {
      console.log(responseP);
      this.chargeListePrestaSalon(this.id);
      this.chargeListePresta();
    }, err => {
      console.log(err);
    });
  }

}
