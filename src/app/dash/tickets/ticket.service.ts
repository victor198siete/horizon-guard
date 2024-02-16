import { Injectable } from '@angular/core';

import { Ticket } from './ticket.model'

@Injectable({
  providedIn: 'root'
})
export class TicketService{
  actualDate =  new Date();

  private tickets: Ticket[] = [
    {
      isActive: true,
      agencyImage: './../../../assets/images/agencies/agency-gaviota-tours.jpg',
      name:'Gaviota Tour Title',
      description:'Tour Description by Gaviota',
      suplierAgency: 'Gaviota Tours',
      duration: 60,
      shedule: this.actualDate,
      destiny: 'Havana',
      country: 'Cuba',
    },
    {
      isActive: true,
      agencyImage: './../../../assets/images/agencies/agency-horizontes.jpg',
      name:'Horizontes Tour Title',
      description:'Tour Description by Horizontes',
      suplierAgency: 'Horizontes Travels',
      duration: 60,
      shedule: this.actualDate,
      destiny: 'Havana',
      country: 'Cuba',
    },
  ];

  getTickets(){
    return this.tickets.slice();
  }

  getTicket(index: number){
    return this.tickets[index];
  }

  constructor(){}


}
