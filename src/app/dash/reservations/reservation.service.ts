import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  actualDate: Date = new Date();

  private reservations: Reservation[] = [
    {
      number: 'HRZ001',
      reference: 'H-001',
      status: true,
      creationDate: this.actualDate,
      user: 'Damian Lopez',
      product: 'Barcelo Solymar',
      price: 60,
      cost: 50,
      passengers: ['Sergio Perez', 'Ana Perez'],
      contactEmail: 'sergio@redbull.com',
    },
    {
      number: 'HRZ002',
      reference: 'H-002',
      status: true,
      creationDate: this.actualDate,
      user: 'Damian Lopez',
      product: 'Barcelo Solymar',
      price: 60,
      cost: 50,
      passengers: ['Max Verstappen',],
      contactEmail: 'max@redbull.com',
    }
  ];

  getReservations(){
    return this.reservations;
  }

  getReservation(index:number){
    return this.reservations[index];
  }

  constructor() { }
}
