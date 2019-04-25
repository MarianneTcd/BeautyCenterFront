import { Component } from '@angular/core';
import { User } from './model/User';
import { Http } from '@angular/http';
import { RouterLinkWithHref, Router } from '@angular/router';
import { ServiceStockageService } from './service-stockage.service';

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
  show=true;

    constructor(private http : Http, private stockageService: ServiceStockageService, private route: Router) { }
  
    ngOnInit() {
    }
  
    pass = false;
    connexion(){
      console.log('debut de connexion()' , this.u);
      this.http.post('http://localhost:8080/connexion', this.u).subscribe(userData=>{
        this.data=userData.json();
  
        console.log('user pour la connect' , this.u);
        console.log('user retourné' , this.data);
  
        if(this.data.id===null || this.data.id===undefined){
          console.log('Identifiant incorrect !');
          this.pass = true;
        }else{
          this.pass = false;
          this.show = false;
          this.stockageService.id = this.data.id;
          console.log('mis en service id', this.stockageService.id);
          console.log('value id avt mis en service', this.data.id);
          if(this.data.access==1){
            this.route.navigate(['/espaceperso']);           
            console.log('coucou petit client');
          }if(this.data.access==3){
            this.route.navigate(['/espacemanager']);
            console.log('coucou petit employe');
          }
        }
      }, err => {
        console.log(err);
      });
    }

    deconnexion(){
      this.show = true;
      this.stockageService.id = null;
      this.data.id = null;
      this.data.nom = null;
      this.data.prenom = null;
      this.data.mail = null;
      this.data.mdp = null;
      this.data.access = null;
      this.route.navigate(['/espacenonuser'])

    }
  
    createUser(){
      this.http.post('http://localhost:8080/users', this.user).subscribe(userData=>{
        console.log(userData);
      }, err => {
        console.log(err);
      });
  
    }

    

}
