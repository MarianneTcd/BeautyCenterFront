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
  modif = false;

  constructor(private http: Http, private stockageService: ServiceStockageService) { }
  id = this.stockageService.id;
  res;
  nom;
  prenom;
  mail;
  mdp;
  access;
  resa; 
  idpresta;  
  presta;  
  idSalon; 
  salon;
  photo; 
  idreserv; 


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
        this.photo = this.res.photo;
      } )

      this.http.get('http://localhost:8080/reserv/user/' + this.id)
    .subscribe(
      response=>{
        this.resa = response.json();
        console.log(this.resa); 
      }
    );
  }

  profil: User= new User;
  recupProfil(id){
    this.http.get('http://localhost:8080/users/' + id).subscribe(response => { 
      console.log(response.json()); 
      this.profil= response.json();
    });
  }

  modifProfile(id){

    this.http.put('http://localhost:8080/user/' + id, this.profil).subscribe(userData => {
      console.log(userData);
      this.modif = true;
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

getTitre(idpresta){ 
  this.idpresta = idpresta
  this.http.get('http://localhost:8080/prestations/' + this.idpresta)
    .subscribe(response => { 
        this.presta= response.json();
    });
}
getSalon(idSalon){ 
  this.idSalon = idSalon
  this.http.get('http://localhost:8080/salons/' + this.idSalon)
    .subscribe(response => { 
        this.salon= response.json();
        console.log(this.salon);
    });
}
recupId(id){ 
  this.idreserv = id
    };


annulReserv(id){ 
  this.idreserv = id 
  this.http.delete('http://localhost:8080/reserv/' + this.idreserv)
    .subscribe(response => { 
      console.log(response)
      this.ngOnInit(); 
    });
}
}
