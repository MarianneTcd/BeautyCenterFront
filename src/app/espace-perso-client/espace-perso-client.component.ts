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
  
  user: User = new User();
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

  modifProfile(){
    this.user.id = this.res.id;
    this.user.mdp = this.res.mdp;
    this.user.access = this.res.access;

    this.http.put('http://localhost:8080/user/' + this.id, this.user).subscribe(userData => {
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

}
