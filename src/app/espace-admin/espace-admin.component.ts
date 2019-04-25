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
  res;
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
  
  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.res= response.json();
        this.nom = this.res.nom;
        this.prenom = this.res.prenom;
        this.mail = this.res.mail;
        this.mdp = this.res.mdp;
        this.access = this.res.access;
      } )
  }

  

}
