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
import { CarteSalonsComponent } from './carte-salons/carte-salons.component';
import { componentFactoryName } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    CreateSalonComponent,
    ListeSalonsComponent,
    ListePrestaComponent,
    InscriptionComponent,
    SalonComponent,
    CarteSalonsComponent,
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
        path:'cartesalons',
        component: CarteSalonsComponent,
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
