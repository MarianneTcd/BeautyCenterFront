import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';

@Component({
  selector: 'app-gestion-prestation',
  templateUrl: './gestion-prestation.component.html',
  styleUrls: ['./gestion-prestation.component.css']
})
export class GestionPrestationComponent implements OnInit {

  constructor(private http: Http, private serv: SalonservicesService) { }
  id = this.serv.id;

  ngOnInit() {
    this.chargeListePrestaSalon(this.id);
    this.chargeListePresta();
    console.log('id du salon qui suit', this.id);

  }

  dataPrestaSalon;
  chargeListePrestaSalon(id) {
    this.http.get('http://localhost:8080/events/salon/' + id).subscribe(response => {
      this.dataPrestaSalon = response.json();
    });
  }

  dataPresta;
  chargeListePresta() {
    this.http.get('http://localhost:8080/prestations').subscribe(response => {
      this.dataPresta = response.json();
    });
  }

}
