import { Component, OnInit } from '@angular/core';
import { Salon } from '../model/Salon';
import { s } from '@angular/core/src/render3';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor(private http: Http, private serv: SalonservicesService) { }

  currentDate = new Date();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  day;
  idpresta;
  mois;
  reserv;
  id = this.serv.id;
  show = false;
  show2 = false;
  s;
  data;
  listeheures;


  ngOnInit() {
    this.http.get('http://localhost:8080/salons/' + this.id)
      .subscribe(
        response => {
          this.s = response.json();
        })

    this.http.get('http://localhost:8080/events/salon/' + this.id)
      .subscribe(
        response => {
          console.log(response.json());
          this.data = response.json();


        })



  }

  afficherplanning(id) {
    this.http.get('http://localhost:8080/testdate/' + this.month)
      .subscribe(
        response => {
          this.idpresta = id;
          this.mois = response.json();
         


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

  fougere(){
    this.show2 = true;
  }

  //

}
