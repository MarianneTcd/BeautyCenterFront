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
  show = false; 
  s;
  data; 
  

  ngOnInit() { 
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
        this.idpresta = this.data.id;
        
      } ) 

      

  }

  afficherplanning() {
    this.http.get('http://localhost:8080/testdate/' + this.month)
      .subscribe(
        response => { 
          console.log(this.month); 
          this.mois= response.json();
          console.log(this.id);
          console.log(this.idpresta);
          
          
        } ) 

  }

  fonction() {
    //this.http.get('http://localhost:8080/reservations/sal' + '{idsalon}' + '/presta{idpresta}/{année}/{mois}/{jour}/{hOuv}/{hFerm}')
    this.show = true;
  }

//
  
}
