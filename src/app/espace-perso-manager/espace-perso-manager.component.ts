import { Component, OnInit } from '@angular/core';
import { ServiceStockageService } from '../service-stockage.service';
import { SalonservicesService } from '../salonservices.service';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { RouterLinkWithHref, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Prestation } from '../model/Prestation';
import { Event } from '../model/Event';
import { User } from '../model/User';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-espace-perso-manager',
  templateUrl: './espace-perso-manager.component.html',
  styleUrls: ['./espace-perso-manager.component.css']
})
export class EspacePersoManagerComponent implements OnInit {

  constructor(private http: Http, private stockageService: ServiceStockageService, private serv: SalonservicesService, private route: Router) { }

  //RECUPERATION DE L'ID DU MANAGER
  idMan = this.stockageService.id;
  res;
  idManager;
  nomManager;
  prenomManager;
  mailManager;
  photoManager;

  ngOnInit() {
    console.log('recup mis en service id', this.stockageService.id);
    console.log('recup mis en service id dans variable perso', this.idMan);
    this.chargeListeSalons(this.idMan)
    console.log('donne das salon', this.dataSalons);

    this.http.get('http://localhost:8080/users/' + this.idMan)
      .subscribe(
        response => {
          console.log(response.json());
          this.res = response.json();
          this.idManager = this.res.id;
          this.nomManager = this.res.nom;
          this.prenomManager = this.res.prenom;
          this.mailManager = this.res.mail;
          this.photoManager = this.res.photo;
        }
      )
  }

  // RECUPERATION DE LA LISTE DES SALONS DU MANAGER
  dataSalons;
  chargeListeSalons(idManager) {
    this.http.get('http://localhost:8080/salons/manager/' + idManager).subscribe(response => {
      this.dataSalons = response.json();
      console.log('Contenu liste salon', this.dataSalons);
    });
  }

  // CREATION D'UN SALON POUR LE MANAGER
  salon: Salon = new Salon();
  createSalon() {
    this.salon.idManager = this.stockageService.id;
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
      this.chargeListeSalons(this.idManager);
    }, err => {
      console.log(err);
    });
  }

  //SUPPRESION D'UN SALON ET EVENT DU MANAGER
  supSalon(id) {
    this.http.delete('http://localhost:8080/events/salon/' + id).subscribe(eventD => {
      console.log(eventD);
    }, err => {
      console.log(err);
    });
    this.http.delete('http://localhost:8080/salons/' + id).subscribe(salonD => {
      console.log(salonD);
      this.chargeListeSalons(this.idManager);
    }, err => {
      console.log(err);
    });
  }

  //AFFICHER / CACHER DES INFOS
  show = false;
  affCach() {
    this.show = !this.show;
  }

  //STOCKAGE ID DU SALON
  infoSalon(numeroSalon) {
    this.serv.id = numeroSalon;
    console.log('numero du salon recup', numeroSalon)
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
    this.http.post('http://localhost:8080/prestations', this.prestation).subscribe(prestationData => {
      console.log(prestationData);
      this.affCach();
    }, err => {
      console.log(err);
    });
  }

  //MODIFICATION SALON
  modifSalon(id) {
    this.salon.idManager = this.stockageService.id;
    this.http.put('http://localhost:8080/salons/' + id, this.stock).subscribe(salonMod => {
      console.log(salonMod);
      this.chargeListeSalons(this.idManager);
    }, err => {
      console.log(err);
    });
  }

  //RECUPERATION SALON PAR ID
  stock: Salon = new Salon();
  getSalon(id) {
    this.http.get('http://localhost:8080/salons/' + id).subscribe(salonGet => {
      console.log(salonGet);
      this.stock = salonGet.json();
      console.log('nom salon stocké', this.stock.nomSalon);
    }, err => {
      console.log(err);
    });
  }

  //RECUPERATION INFOS MANAGER
  stockManager: User = new User();
  getCompte(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(userGet => {
      console.log(userGet);
      this.stockManager = userGet.json();
    }, err => {
      console.log(err);
    });
  }

  user: User = new User;
  data;
  nom;
  prenom;
  showManager = false;

  modif=false;
  //MODIFICATION COMPTE MANAGER
  modifCompte(id) {
    this.http.put('http://localhost:8080/user/' + id, this.stockManager).subscribe(userPut => {
      console.log(userPut);
      this.ngOnInit();
      this.modif=true;
    }, err => {
      console.log(err);
    });
  }

  //DESACTIVATION COMPTE MANAGER
  desactiveCompte(id) {
    this.stockManager.access = 5;
    this.http.put('http://localhost:8080/user/' + id, this.stockManager).subscribe(userPut => {
      this.route.navigate(['/espacemanager']);
      console.log(userPut);
    }, err => {
      console.log(err);
    });
  }

}
