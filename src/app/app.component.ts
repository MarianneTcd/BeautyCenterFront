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
  mail;
  user: User = new User();
  u: User = new User();
  show = true;
  showClient = false;  //pour faire afficher le bouton espace client dans le bar nav
  showManager = false;
  showAdmin = false;
  nom = null;
  prenom = null;

  constructor(private http: Http, private stockageService: ServiceStockageService, private route: Router) { }

  ngOnInit() {
  }

  pass = false;
  desactive = false;
  connecte = true;
  connexion() {
    console.log('debut de connexion()', this.u);
    this.http.post('http://localhost:8080/connexion', this.u).subscribe(userData => {
      this.data = userData.json();
      if (this.data.id === null || this.data.id === undefined) {
        this.pass = true;
      } else {
        this.pass = false;
        this.show = false;
        this.stockageService.id = this.data.id;
        this.nom = this.data.nom;
        this.prenom = this.data.prenom;
        if (this.data.access == 1) {
          this.route.navigate(['/espaceperso']);
          this.showClient = true;
        } else if (this.data.access == 3) {
          this.route.navigate(['/espacemanager']);
          this.showManager = true;
        } else if (this.data.access == 4) {
          this.route.navigate(['/espaceadmin']);
          this.showAdmin = true;
        } else if (this.data.access == 5) {
          this.desactive = true;
          this.connecte = false;
          this.show = true;
        }
      }
    }, err => {
      console.log(err);
    });
  }

  deconnexion() {
    this.show = true;
    this.stockageService.id = null;
    this.data.id = null;
    this.data.nom = null;
    this.data.prenom = null;
    this.data.mail = null;
    this.data.mdp = null;
    this.data.access = null;
    this.showClient = false;
    this.showManager = false;
    this.showAdmin = false;
    this.nom = null;
    this.prenom = null;
    this.route.navigate(['/espacenonuser'])

  }

  createUser() {
    this.http.post('http://localhost:8080/users', this.user).subscribe(userData => {
      console.log(userData);

      this.http.post('http://localhost:8080/mailcreationcompte', this.user).subscribe(reponse => {
        this.mail = reponse.json();

        console.log('mail => user', this.user);
        console.log('mail', this.mail);
        console.log('mail envoyé');
      })
    }, err => {
      console.log(err);
    });

  }



}
