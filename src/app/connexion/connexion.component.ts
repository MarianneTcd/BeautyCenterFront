import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { Http } from '@angular/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  data;
  /*user: User = new User();*/

  constructor(private http: Http) { }

  ngOnInit() {

  }

  connexion(){
   // this.http.post('http://localhost:8080/connexion').response
  }
  
}
