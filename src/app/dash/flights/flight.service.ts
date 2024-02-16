import { Injectable } from '@angular/core';

import { Flight } from './flight.model'

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  actualDate = new Date();

  private flights: Flight[] = [
    {
      isActive: true,
      airline:'AeroGaviota',
      airlineImage: './../../../assets/images/agencies/agency-gaviota-tours.jpg',
      suplierAgency: 'Gaviota Tours',
      flightNumber: 'GVT 1234',
      duration: 60,
      shedule: this.actualDate,
      startLocation: 'Havana',
      endLocation: 'Varadero',
    }
  ]

  getFlights(){
    return this.flights.slice();
  }

  getFlight(index: number){
    return this.flights[index];
  }

  constructor(){}

}
