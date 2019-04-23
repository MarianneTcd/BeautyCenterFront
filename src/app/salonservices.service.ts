import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalonservicesService {

  constructor() { }

  dateToday(){
    return new Date();
  }
}
