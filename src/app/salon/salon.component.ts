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

  constructor(private http:Http, private serv: SalonservicesService) { }
  currentDate = new Date() ; 
  month = this.currentDate.getMonth()+1 ;
  year = this.currentDate.getFullYear() ; 
  day = this.currentDate.getDay() ;

idpresta ; 
  mois ; 
  reserv ;  
  id = this.serv.id;
  show = true; 

  

  s;
  data; 
  choixsoin = "Je choisis mon soin";
 // table=["manucure", "brushing", "pédicure", "couleur"];

  ngOnInit() { 
    console.log('test jo', this.id);
  this.http.get('http://localhost:8080/salons/' + this.id)
  .subscribe(
    response => { 
      console.log(response.json()); 
      this.s= response.json();
    } ) 

    this.http.get('http://localhost:8080/events/salon/' + this.id)
    .subscribe(
      response => { 
        console.log(response.json()); 
        this.data= response.json();
      } ) 

      

  }

  afficherplanning() {
    this.http.get('http://localhost:8080/testdate/' + this.month)
      .subscribe(
        response => { 
          console.log(response.json()); 
          this.mois= response.json();
          
        } ) 

  }

  goReserv(m){
    this.show = false ;
    this.http.get('http://localhost:8080/reservations/'+ this.s.id + '/' this.data.id + '/' + this.year + '/' + this.month +'/'+ this.day + 9 + '/' + 17 )
      .subscribe(
        response => { 
          console.log(response.json()); 
          this.reserv = response.json();
        } ) 

  }
//
  
}
