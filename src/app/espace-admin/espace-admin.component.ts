import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';

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
  managerDisable: User = new User;
  managerActive: User = new User;

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

  chargeListe(){
    this.http.get('http://localhost:8080/users/managers')
    .subscribe(
      response => {
        console.log(response.json());
        this.manager = response.json();
      })
  }

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

  goDisable(id){
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerDisable = response.json();
      })
  }

  disable(id){
    this.managerDisable.access = 5;
    this.http.put('http://localhost:8080/user/' + id, this.managerDisable).subscribe(
      response => {
        console.log(response.json());
        this.managerDisable = response.json();
      })
    this.chargeListe();
  }

  goActive(id){
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerActive = response.json();
      })
  }

  active(id){
    this.managerActive.access = 3;
    this.http.put('http://localhost:8080/user/' + id, this.managerActive).subscribe(
      response => {
        console.log(response.json());
        this.managerActive = response.json();
      })
    this.chargeListe();
  }

  createManager() {
    this.man.access = 3;
    this.http.post('http://localhost:8080/users', this.man).subscribe(userData => {
      console.log(userData);

      this.http.post('http://localhost:8080/mailcreationmanager', this.man).subscribe(reponse => {
        this.mail = reponse.json();
        console.log('mail => man', this.man);
        console.log('mail', this.mail);
        console.log('mail envoyé');
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
