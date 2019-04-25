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
  
  user1: User = new User();
  user2: User = new User();
  user3: User = new User();
  u: User = new User();
  mdpA;
  mdpN1;
  passS=false;
  passE=false;

  constructor(private http: Http, private stockageService: ServiceStockageService) { }
  id = this.stockageService.id;
  res;
  nom;
  prenom;
  mail;
  mdp;
  access;

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
  
  modifNom(){
    this.user1.id = this.res.id;
    this.user1.prenom = this.res.prenom;
    this.user1.mail = this.res.mail;
    this.user1.mdp = this.res.mdp;
    this.user1.access = this.res.access;

    this.http.put('http://localhost:8080/user/' + this.id, this.user1).subscribe(userData => {
      console.log(userData);
    }, err => {
      console.log(err);
    });

    this.http.get('http://localhost:8080/users/' + this.id).subscribe(response => { 
      console.log(response.json()); 
      this.res= response.json();
      this.nom = this.res.nom;
      console.log('rafraîchir après le modif nom');
    });
  }

  modifPrenom(){
    this.user2.id = this.res.id;
    this.user2.nom = this.res.nom;
    this.user2.mail = this.res.mail;
    this.user2.mdp = this.res.mdp;
    this.user2.access = this.res.access;

    this.http.put('http://localhost:8080/user/' + this.id, this.user2).
    subscribe(userData => {
      console.log(userData);
    }, err => {
      console.log(err);
    });

    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(response => { 
        console.log(response.json()); 
        this.res= response.json();
        this.prenom = this.res.prenom;
        console.log('rafraîchir après le modif prenom');
    });
  }

  modifMail(){
    this.user3.id = this.res.id;
    this.user3.nom = this.res.nom;
    this.user3.prenom = this.res.prenom;
    this.user3.mdp = this.res.mdp;
    this.user3.access = this.res.access;

    this.http.put('http://localhost:8080/user/' + this.id, this.user3).
    subscribe(userData => {
      console.log(userData);
    }, err => {
      console.log(err);
    });

    this.http.get('http://localhost:8080/users/' + this.id)
    .subscribe(response => { 
        console.log(response.json()); 
        this.res= response.json();
        this.mail = this.res.mail;
        console.log('rafraîchir après le modif mail');
    });
  }

  modifMdp() {

    this.u.id = this.res.id;
    this.u.nom = this.res.nom;
    this.u.prenom = this.res.prenom;
    this.u.mail = this.res.mail;
    this.u.access = this.res.access;

    if (this.mdpA === this.res.mdp && this.mdpN1 === this.u.mdp){
      this.http.put('http://localhost:8080/user/' + this.id, this.u).subscribe(userData=>{
        console.log(userData);
      }, err => {
        console.log(err);
      });
      console.log('la modification de mot de passe a bien été prise en compte');
      this.passS = true;
      this.passE = false;
    }else {
      console.log('la modification de mot de passe est echouée');
      this.passS = false;
      this.passE = true;
    }
  }

  /*
  modifProf() {
   
    this.user.id = this.res.id;
    this.user.mdp = this.res.mdp;
    this.user.access = this.res.access;

    this.http.put('http://localhost:8080/user/' + this.id, this.user).subscribe(userData=>{
      console.log(userData);
    }, err => {
      console.log(err);
    });

  }
*/

}
