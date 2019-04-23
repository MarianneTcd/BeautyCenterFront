import { Component, OnInit } from '@angular/core';
import { Salon } from '../model/Salon';
import { s } from '@angular/core/src/render3';
import { Http } from '@angular/http';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor(private http:Http) { }
  id;
  s;
  ngOnInit() {

    
    this.http.get('http://localhost:8080/salons/'+ this.id)
    .subscribe(
      response=>{
        this.s= response.json();
      }
    );
  }


}
