import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateSalonComponent } from './create-salon/create-salon.component';
import { ListeSalonsComponent } from './liste-salons/liste-salons.component';
import { ListePrestaComponent } from './liste-presta/liste-presta.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SalonservicesService } from './salonservices.service';
import { SalonComponent } from './salon/salon.component';
import { Salon } from './model/Salon';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSalonComponent,
    ListeSalonsComponent,
    ListePrestaComponent,
    InscriptionComponent,
    SalonComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: 'listesalons',
        component: ListeSalonsComponent,
      },

      {
        path: 'listeprestations',
        component: ListePrestaComponent,
      },

      {
        path: 'createsalon',
        component: CreateSalonComponent,
      },

      {
        path: 'createUser',
        component: InscriptionComponent,
      },

      {
        path: 'gosalon',
        component: SalonComponent,
      },

      {
        path: 'connexion',
        component: ConnexionComponent,
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
