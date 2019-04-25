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
  nom;
  prenom;
  mail;
  mdp;
  access;
  user1: User = new User();
  user2: User = new User();
  user3: User = new User();
  u: User = new User();
  mdpA;
  mdpN1;
  passS=false;
  passE=false;
  manager; 
  
  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.resUser= response.json();
        this.nom = this.resUser.nom;
        this.prenom = this.resUser.prenom;
        this.mail = this.resUser.mail;
        this.mdp = this.resUser.mdp;
        this.access = this.resUser.access;
      } )

    this.http.get('http://localhost:8080/users/managers')
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.manager= response.json();
      } )
  }



}
