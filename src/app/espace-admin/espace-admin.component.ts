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
  managerModif 
  nomM;
  prenomM;
  mailM;
  mdpM;
  accessM;

  //variable qui chargera la liste de tous les managers
  manager;  

  //variable qui charge le mail de manager crée qui est utilisé pour envoyer un mail
  mail; 

  //variable pour switcher entre le panneau d'ajout et de modification de manager
  show = true; 

  //stocker les info du manager à ajouter;
  man: User = new User();



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
    this.show = false;
  }

  showAjout(){
    this.show = true;
  }

  createManager(){
    this.man.access = 3;
    this.http.post('http://localhost:8080/users', this.man).subscribe(userData=>{
      console.log(userData);      
    }, err => {
      console.log(err);
    });

    this.http.get('http://localhost:8080/users/managers')
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.manager= response.json();
      } )
  }
  
}
