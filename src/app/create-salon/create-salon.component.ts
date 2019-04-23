import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { Prestation } from '../model/Prestation';



@Component({
  selector: 'app-create-salon',
  templateUrl: './create-salon.component.html',
  styleUrls: ['./create-salon.component.css']
})
export class CreateSalonComponent implements OnInit {
  data;
  salon: Salon = new Salon();
  prestation: Prestation = new Prestation();
  show = false;
  affCach() {
    this.show = !this.show;
  }

  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/prestations').subscribe(response =>{
      this.data = response.json();
    });
  }

  createSalon(){
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData=>{
      console.log(salonData);
    }, err => {
      console.log(err);
    });
  }

  createPrestation(){
    this.http.post('http://localhost:8080/prestations', this.prestation).subscribe(prestationData=>{
      console.log(prestationData);
      this.affCach();
    }, err => {
      console.log(err);
    });
  }

}
