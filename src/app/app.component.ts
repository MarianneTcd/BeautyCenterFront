import { Component } from '@angular/core';
import { User } from './model/User';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;
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
      }, err => {
        console.log(err);
      });
  
    }
}
