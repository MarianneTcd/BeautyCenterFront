import { Component, OnInit } from '@angular/core';
import { Salon } from '../model/Salon';
import { s } from '@angular/core/src/render3';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { $ } from 'protractor';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  calendarPlugins = [timeGridPlugin, interactionPlugin];

  handleDateClick(arg){
    alert("ceci est un test" + arg.dateStr);
  }

  constructor(private http:Http, private serv: SalonservicesService) { }
  id = this.serv.id;
  s;
  choixsoin = "Je choisis mon soin";
  table=["manucure", "brushing", "pédicure", "couleur"];


  ngOnInit() {

    console.log('test jo', this.id);
    
    this.http.get('http://localhost:8080/salons/'+ this.id)
    .subscribe(
      response=>{
        this.s= response.json();
        console.log(this.s)
      }
    );
  }

  
 


}
