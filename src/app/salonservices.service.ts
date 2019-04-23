import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalonservicesService {

  constructor(
  ) { }
id;
  dateToday(){
    return new Date();
  }
}
