import { Component, OnInit } from '@angular/core';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { identifierModuleUrl } from '@angular/compiler';
import { Prestation } from '../model/Prestation';
import { Event } from '../model/Event';

@Component({
  selector: 'app-espace-perso-manager',
  templateUrl: './espace-perso-manager.component.html',
  styleUrls: ['./espace-perso-manager.component.css']
})
export class EspacePersoManagerComponent implements OnInit {

  constructor(private http: Http, private stockageService: ServiceStockageService) { }

  //RECUPERATION DE L'ID DU MANAGER
  idMan = this.stockageService.id;
  res;
  ngOnInit() {
    this.chargeListeSalons();
    this.http.get('http://localhost:8080/users/' + this.idMan)
      .subscribe(
        response => {
          console.log(response.json());
          this.res = response.json();
        }
      )
  }

  // RECUPERATION DE LA LISTE DES SALONS DU MANAGER
  dataSalons;
  chargeListeSalons() {
    this.http.get('http://localhost:8080/salons').subscribe(response => {
      this.dataSalons = response.json();
    });
  }

  // CREATION D'UN SALON POUR LE MANAGER
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

  //SUPPRESION D'UN SALON ET EVENT DU MANAGER
  suppression = false;
  supSalon(id) {
    this.http.delete('http://localhost:8080/events/salon/' + id).subscribe(eventD => {
      console.log(eventD);
    }, err => {
      console.log(err);
    });
    this.http.delete('http://localhost:8080/salons/' + id).subscribe(salonD => {
      console.log(salonD);
      this.suppression = true;
      this.chargeListeSalons();
    }, err => {
      console.log(err);
    });
  }

  //AFFICHER / CACHER DES INFOS
  show = false;
  affCach() {
    this.show = !this.show;
  }

  // RECUPERATION DE LA LISTE DES PRESTATIONS DU SALON
  dataPresta;
  chargeListePresta(id) {
    this.http.get('http://localhost:8080/events/salon/' + id).subscribe(response => {
      this.dataPresta = response.json();
    });
  }

  // AJOUT D'UNE PRESTATION AU SALON
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
      }, err => {
        console.log(err);
      });
    }
  }

  //CREATION PRESTATION ET EVENT
  event: Event = new Event();
  createEvent() {
    this.createPrestation();
    this.http.post('http://localhost:8080/events', this.event).subscribe(eventData => {
      console.log(eventData);
      this.affCach();
    }, err => {
      console.log(err);
    });
  }


}
