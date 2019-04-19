import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-liste-salons',
  templateUrl: './liste-salons.component.html',
  styleUrls: ['./liste-salons.component.css']
})
export class ListeSalonsComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  /*constructor(private http:Http) { }
  
  data;
  ngOnInit() {
    this.http.get('http://localhost:8080/users')
    .subscribe(
      response=>{
        console.log(response.json());
        this.data = response.json();
      }
    );
}*/

}
