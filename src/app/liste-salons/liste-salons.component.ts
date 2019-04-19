import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-liste-salons',
  templateUrl: './liste-salons.component.html',
  styleUrls: ['./liste-salons.component.css']
})
export class ListeSalonsComponent implements OnInit {

  constructor(private http:Http) { }
  
  salooon;
  ngOnInit() {
    this.http.get('http://localhost:8080/salons')
    .subscribe(
      response=>{
        this.salooon = response.json();
      }
    );
}

}
