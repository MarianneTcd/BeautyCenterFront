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

  id = this.stockageService.id;
  resUser;
  nomA; //déclarer les info d'administrateur sur la session
  prenomA;
  mailA;
  mdpA;
  accessA;
  managerModif //déclarer les info de manager que l'administrateur souhaite modifier
  nomM;
  prenomM;
  mailM;
  mdpM;
  accessM;
  user1: User = new User();
  user2: User = new User();
  user3: User = new User();
  u: User = new User();
  passS=false;
  passE=false;
  manager; //déclarer le variable qui chargera la liste de tous les managers
  
  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.resUser= response.json();
        this.nomA = this.resUser.nom;
        this.prenomA = this.resUser.prenom;
        this.mailA = this.resUser.mail;
        this.mdpA = this.resUser.mdp;
        this.accessA = this.resUser.access;
      } )

    this.http.get('http://localhost:8080/users/managers')
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.manager= response.json();
      } )
  }

  goModif(id){
    this.http.get('http://localhost:8080/users/' + id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.managerModif = response.json();
        this.nomM = this.managerModif.nom;
        this.prenomM = this.managerModif.prenom;
        this.mailM = this.managerModif.mail;
        this.mdpM = this.managerModif.mdp;
      } )
    

  }



}
