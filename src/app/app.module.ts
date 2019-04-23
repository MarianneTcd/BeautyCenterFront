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


@NgModule({
  declarations: [
    AppComponent,
    CreateSalonComponent,
    ListeSalonsComponent,
    ListePrestaComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path:'listesalons',
        component: ListeSalonsComponent,
      },

      {
        path:'listeprestations',
        component: ListePrestaComponent,
      },

      {
        path:'createsalon',
        component: CreateSalonComponent,
      },

      {
        path:'createUser',
        component: InscriptionComponent,
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
