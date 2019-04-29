import { Component, OnInit } from '@angular/core';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';
import { User } from '../model/User';
import { userInfo } from 'os';
import { Reservation } from '../model/Reservation';

@Component({
  selector: 'app-espace-perso-client',
  templateUrl: './espace-perso-client.component.html',
  styleUrls: ['./espace-perso-client.component.css']
})
export class EspacePersoClientComponent implements OnInit {

  user: User = new User();
  modif = false;

  constructor(private http: Http, private stockageService: ServiceStockageService) { }
  currentDate = new Date();
  reservation: Reservation = new Reservation();
  id = this.stockageService.id;
  res;
  nom;
  prenom;
  mail;
  mdp;
  access;
  resa;
  resa2;
  idpresta;
  presta;
  idSalon;
  salon;
  photo;
  idreserv;
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  day;
  nompresta;
  mois;
  dureepresta;
  listeheures;
  show = false;
  texteheuresminutes;
  heure;
  minute;
  show2 = false;
  iduser = this.stockageService.id;
  michel = "";



  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
      .subscribe(
        response => {
          console.log(response.json());
          this.res = response.json();
          this.nom = this.res.nom;
          this.prenom = this.res.prenom;
          this.mail = this.res.mail;
          this.mdp = this.res.mdp;
          this.access = this.res.access;
          this.photo = this.res.photo;
        })

    this.http.get('http://localhost:8080/reserv/user/' + this.id)
      .subscribe(
        response => {
          this.resa = response.json();
          console.log(this.resa);
        }
      );
  }

  profil: User = new User;
  recupProfil(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(response => {
      console.log(response.json());
      this.profil = response.json();
    });
  }

  modifProfile(id) {

    this.http.put('http://localhost:8080/user/' + id, this.profil).subscribe(userData => {
      console.log(userData);
      this.modif = true;
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

  getTitre(idpresta) {
    this.idpresta = idpresta
    this.http.get('http://localhost:8080/prestations/' + this.idpresta)
      .subscribe(response => {
        this.presta = response.json();
      });
  }
  getSalon(idSalon) {
    this.idSalon = idSalon
    this.http.get('http://localhost:8080/salons/' + this.idSalon)
      .subscribe(response => {
        this.salon = response.json();
        console.log(this.salon);
      });
  }
  recupId(id) {
    this.idreserv = id
  };

  annul = false;
  annulReserv(id) {
    this.idreserv = id;
    this.michel = "Réservation annulée";
    this.http.delete('http://localhost:8080/reserv/' + this.idreserv)
      .subscribe(response => {
        console.log(response)
        this.annul = true;
        this.ngOnInit();
      });
  }

  recupReserv(id) {
    this.idreserv = id;
    console.log("ZEIHFZIUEHFZEHFZIUHEFZUHFZEFH " + this.idreserv)
    this.http.get('http://localhost:8080/reserv/' + this.idreserv).subscribe(response => {
      this.resa2 = response.json();
      console.log("sandwich " + this.resa2)
    });
    console.log(this.resa2 + "voila");
    this.afficherplanning();


  }

  moisSuivant() {
    this.month = this.month + 1;
    this.afficherplanning();
  }

  moisPrecedent() {
    this.month = this.month - 1;
    this.afficherplanning();
  }

  afficherplanning() {
    this.http.get('http://localhost:8080/testdate/' + this.month)
      .subscribe(
        response => {
          this.mois = response.json();
          console.log(this.resa2.idpresta);
          console.log(this.resa2.dureepresta);
          console.log(this.mois);
          console.log(this.year);
          console.log(this.month);
        })
  }

  fonction(day) {

    this.day = day;
    this.http.get('http://localhost:8080/reservations/sal' + this.resa2.idsalon + '/presta' + this.resa2.idpresta + '/' + this.year + '/' + this.month + '/' + this.day + '/' + "9" + '/' + "17")
      .subscribe(
        response => {
          this.listeheures = response.json();
        }
      )
    this.show = true;
  }

  affichageReserver(heure, minute) {
    this.show2 = true;
    this.texteheuresminutes = heure + "h" + minute;
    this.heure = heure;
    this.minute = minute;
    this.show = false;
    this.reservation.iduser = this.iduser;
    this.reservation.idsalon = this.id;
    this.reservation.idpresta = this.resa2.idpresta;
    this.reservation.annee = this.year;
    this.reservation.mois = this.month;
    this.reservation.jour = this.day;
    this.reservation.heure = this.heure;
    this.reservation.minute = this.minute;
    this.reservation.dureepresta = this.resa2.dureepresta;
    console.log(this.reservation);

  }

  reserver(reservation) {
    this.reservation = reservation;

    this.annulReserv(this.resa2.id);
    this.michel = "Réservation modifiée";

    this.http.post('http://localhost:8080/PresqueReservations', this.reservation)
      .subscribe(reserv => {
        this.michel = "Réservation modifiée";
      });

    this.michel = "Réservation modifiée";
  }

}

