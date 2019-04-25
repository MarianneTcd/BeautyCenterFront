import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/User';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.css']
})
export class ConnexionInscriptionComponent implements OnInit {
  data;
  mail;

user: User= new User();
u: User= new User();

  constructor(private http : Http) { }

  ngOnInit() {
  }


  connexion(){
    this.http.post('http://localhost:8080/connexion', this.u).subscribe(userData=>{
      this.data=userData.json();

      console.log('user pour la connect' , this.u);
      console.log('user retourné' , this.data);

      if(this.data.id===null || this.data.id===undefined){
        console.log('Identifiant incorrect !');
      }else{
        console.log('okk');
      }
    }, err => {
      console.log(err);
    });
  }

  createUser(){
    this.http.post('http://localhost:8080/users', this.user).subscribe(userData=>{
      console.log(userData);
      this.http.post('http://localhost:8080/mailcreationcompte',this.user).subscribe(reponse =>{
        this.mail=reponse.json();
        console.log('mail envoyé');

      })
    }, err => {
      console.log(err);
    });

  }
}

