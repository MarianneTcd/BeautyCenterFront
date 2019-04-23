import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateSalonComponent } from './create-salon/create-salon.component';
import { ListeSalonsComponent } from './liste-salons/liste-salons.component';
import { ListePrestaComponent } from './liste-presta/liste-presta.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SalonservicesService } from './salonservices.service';
import { SalonComponent } from './salon/salon.component';
import { Salon } from './model/Salon';
import { CarteSalonsComponent } from './carte-salons/carte-salons.component';
import { EspacePersoClientComponent } from './espace-perso-client/espace-perso-client.component';
import { EspacePersoManagerComponent } from './espace-perso-manager/espace-perso-manager.component';
import { ConnectionInscriptionComponent } from './connection-inscription/connection-inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSalonComponent,
    ListeSalonsComponent,
    ListePrestaComponent,
    SalonComponent,
    CarteSalonsComponent,
    EspacePersoClientComponent,
    EspacePersoManagerComponent,
    ConnectionInscriptionComponent,
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
        component: ConnectionInscriptionComponent,
      },

      {
        path: 'gosalon',
        component: SalonComponent,
      },

      {
        path: 'cartesalons',
        component: CarteSalonsComponent,
      },

      {
        path: 'espaceperso',
        component: EspacePersoClientComponent,
      },
      {
        path: 'espacemanager',
        component: EspacePersoManagerComponent,
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
