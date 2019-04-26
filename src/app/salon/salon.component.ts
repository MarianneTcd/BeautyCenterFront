import { Component, OnInit } from '@angular/core';
import { Salon } from '../model/Salon';
import { s } from '@angular/core/src/render3';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { $ } from 'protractor';
import { PathLocationStrategy } from '@angular/common';
import { ServiceStockageService } from '../service-stockage.service';
import { Reservation } from '../model/Reservation';


@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor(private http: Http, private serv: SalonservicesService, private serv2: ServiceStockageService) { }


  iduser = this.serv2.id; 
  reservation: Reservation = new Reservation();
  currentDate = new Date();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  day;
  idpresta;
  nompresta;
  mois;
  reserv;
  id = this.serv.id;
  show = false;
  show2 = false;
  showplanning = false;
  s;
  listepresta;
  listeheures;
  texteheuresminutes;
  heure ; 
  minute; 
  dureepresta;
  idsalon;
  user;
  mail;
  nomS;
  telephoneS;
  adresseS;
  photoS;


  


  ngOnInit() {

    this.http.get('http://localhost:8080/salons/' + this.id)
      .subscribe(
        response => {
          this.s = response.json();
          this.nomS = this.s.nomSalon;
          this.telephoneS = this.s.telephone;
          this.adresseS = this.s.adresse;
          this.photoS = this.s.photo;

        })

    this.http.get('http://localhost:8080/events/salon/' + this.id)
      .subscribe(
        response => {
          this.listepresta = response.json();
        })

  }
  

  moisSuivant(){
    this.month = this.month + 1;
    this.afficherplanning(this.idpresta, this.dureepresta, this.nompresta);
  }

  moisPrecedent(){
    this.month = this.month - 1;
    this.afficherplanning(this.idpresta, this.dureepresta, this.nompresta);
  }

  afficherplanning(id, duree, titre) {
    this.http.get('http://localhost:8080/testdate/' + this.month)
      .subscribe(
        response => {
          this.idpresta = id;
          this.nompresta = titre;
          this.mois = response.json();
          this.dureepresta = duree ; 
          this.showplanning = true ;
        })
  }

  fonction(day) {

    this.day = day;
    this.http.get('http://localhost:8080/reservations/sal' + this.id + '/presta' + this.idpresta + '/' + this.year + '/' + this.month + '/' + this.day + '/' + "9" + '/' + "17")
    .subscribe(
      response => {
        this.listeheures = response.json();
      }
    )
    this.show = true;
  }

  affichageReserver(heure, minute){
    this.show2 = true;
    this.texteheuresminutes = heure + "h" + minute;
    this.heure = heure ; 
    this.minute = minute ; 
    this.show = false;
    this.reservation.iduser = this.iduser;
    this.reservation.idsalon = this.id;
    this.reservation.idpresta = this.idpresta;
    this.reservation.annee = this.year;
    this.reservation.mois = this.month;
    this.reservation.jour = this.day;
    this.reservation.heure = this.heure;
    this.reservation.minute = this.minute;
    this.reservation.dureepresta = this.dureepresta;
    console.log(this.reservation);
  }


  
  reserver(reservation) {
this.reservation=reservation;
    

   this.http.post('http://localhost:8080/PresqueReservations', this.reservation)
    .subscribe(reserv => {
      console.log(reserv);
      this.http.post('http://localhost:8080/mailreservation/' +this.iduser +'/'+this.idsalon+'/'+this.idpresta , this.user).subscribe(reponse => {
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


