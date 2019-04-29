import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  constructor(private http: Http, private stockageService: ServiceStockageService) { }

  //récupérer l'ID et stocker les info de l'administrateur sur la session
  id = this.stockageService.id;
  resUser;
  nomA;
  prenomA;
  mailA;
  mdpA;
  accessA;

  //stocker les info du manager que l'administrateur souhaite modifier
  managerModif: User = new User;

  //stocker les info du manager que l'administrateur souhaite activer ou désactiver

  //variable qui chargera la liste de tous les managers
  manager;

  //variable qui charge le mail de manager crée qui est utilisé pour envoyer un mail
  mail;

  //variable pour switcher entre le panneau d'ajout et de modification de manager
  show = true;

  //stocker les info du manager à ajouter;
  man: User = new User();

  //stocker les info du manager à modifier;
  manag: User = new User();

  //pour afficher le message après la création de manager
  showMessageCreate = false;

  showModif = false;
  showAjout = false;




  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
      .subscribe(
        response => {
          console.log(response.json());
          this.resUser = response.json();
          this.nomA = this.resUser.nom;
          this.prenomA = this.resUser.prenom;
          this.mailA = this.resUser.mail;
          this.mdpA = this.resUser.mdp;
          this.accessA = this.resUser.access;
        })
    this.chargeListe();
  }

  chargeListe(){
    this.http.get('http://localhost:8080/users/managers')
    .subscribe(
      response => {
        console.log(response.json());
        this.manager = response.json();
      });
  }

  goModif(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerModif = response.json();
      })
    this.showModif = true;
    this.showAjout = false;
  }

  modifManager(id) {
    this.managerModif.access = 3;
    this.http.put('http://localhost:8080/user/' + id, this.managerModif).
      subscribe(userData => {
        console.log(userData);
      }, err => {
        console.log(err);
      });

    this.chargeListe();

    this.showAjout = false;
    this.showModif = false;
  }

  afficheAjout() {
    this.showAjout = true;
    this.showModif = false;
  }

  cacheAjoutModif(){
    this.showAjout = false;
    this.showModif = false;
  }

  managerAD: User = new User;
  managerInactif: User = new User;
  managerActif: User = new User;
  getInfo(id){
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerAD = response.json();
      });
    }

  activation(id){
      if(this.managerAD.access==3){
        this.managerAD.access=5;
        this.http.put('http://localhost:8080/user/' + id, this.managerAD).subscribe(
      response => {
        console.log(response.json());
        this.managerInactif = response.json();
        this.chargeListe();
      });
    }else if (this.managerAD.access==5){
      this.managerAD.access=3;
        this.http.put('http://localhost:8080/user/' + id, this.managerAD).subscribe(
      response => {
        console.log(response.json());
        this.managerActif = response.json();
        this.chargeListe();
      });
    }
  }

  createManager() {
    this.man.access = 3;
    this.http.post('http://localhost:8080/users', this.man).subscribe(userData => {
      console.log(userData);

      this.http.post('http://localhost:8080/mailcreationmanager', this.man).subscribe(reponse => {
        this.mail = reponse.json();
      })
    }, err => {
      console.log(err);
    });

    this.showAjout = false;
    this.showModif = false;
    this.showMessageCreate = true;
    this.chargeListe();
  }

}
