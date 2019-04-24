import { Component, OnInit } from '@angular/core';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';
import { User } from '../model/User';
import { userInfo } from 'os';

@Component({
  selector: 'app-espace-perso-client',
  templateUrl: './espace-perso-client.component.html',
  styleUrls: ['./espace-perso-client.component.css']
})
export class EspacePersoClientComponent implements OnInit {
  
  user: User= new User();

  constructor(private http: Http, private stockageService: ServiceStockageService) { }
  id = this.stockageService.id;
  res;
  nom;
  prenom;
  mail;
  mdp;

  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.res= response.json();
        this.nom = this.res.nom;
        this.prenom = this.res.prenom;
        this.mail = this.res.mail;
        this.mdp = this.res.mdp
      } )

  }

  modifprof() {

  }

}
