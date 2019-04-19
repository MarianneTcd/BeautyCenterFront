import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-liste-presta',
  templateUrl: './liste-presta.component.html',
  styleUrls: ['./liste-presta.component.css']
})
export class ListePrestaComponent implements OnInit {
  data;
  constructor(private http: Http) { } // private http: Http liaison à la BD

  ngOnInit() {
    this.http.get('http://localhost:8080/prestations').subscribe(response => {
    console.log(response.json());
    this.data = response.json();
                });
  }

}
