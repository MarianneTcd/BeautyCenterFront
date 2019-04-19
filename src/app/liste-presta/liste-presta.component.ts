import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-presta',
  templateUrl: './liste-presta.component.html',
  styleUrls: ['./liste-presta.component.css']
})
export class ListePrestaComponent implements OnInit {
  data;
  constructor( ) { } // private http: Http liaison à la BD

  ngOnInit() { //this.http.get('http://localhost:8080/users').subscribe(response => {
                //console.log(response.json());
                //this.data = response.json();
                //});
  }

}
