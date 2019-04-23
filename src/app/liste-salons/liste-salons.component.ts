import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-salons',
  templateUrl: './liste-salons.component.html',
  styleUrls: ['./liste-salons.component.css']
})
export class ListeSalonsComponent implements OnInit {
  constructor(private http:Http, private salonService: SalonservicesService, private route: Router) { }
  
  dateJ;
  salooon;

  ngOnInit() {
   
    this.http.get('http://localhost:8080/salons')
    .subscribe(
      response=>{
        this.salooon = response.json();
      }
    );
}

   goSalon(id){

     
     this.route.navigate(['/gosalon']);
     this.salonService.id = id;

    console.log('test du service départ' ,this.salooon.id);
    console.log('test id normal', id);

   }

}
