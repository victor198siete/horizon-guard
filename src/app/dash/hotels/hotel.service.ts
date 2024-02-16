import { Injectable } from '@angular/core';

import { Hotel, Room, HotelRate, Season } from './index';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels: Hotel[] = [
  {
    isActive: true,
    name: 'Barcelo Solymar',
    suplierAgency: 'Barcelo',
    hotelChain: 'Barcelo Group',
    rating: 4,
    destiny: 'Varadero',
    country: 'Cuba',
    zip: '14000',
    phone: 53440801,
    email: 'ventas@barcelo.com',
    description: 'Descripción del Hotel Barcelo Solymar, Varadero, Cuba.',
    imagePath: './../../../assets/images/hotels/barcelo-solymar.png',
    amenities: ['Wi-Fi', 'Piscina', 'Estacionamiento'],
    roomList: [
      { name: 'Sencilla', allowChild: true, maxPersons: 2, maxChild: 1},
      { name: 'Doble', allowChild: true, maxPersons: 4, maxChild: 2},
    ],
    mealPlan: [
      {id: '1', name:'Bed and Breakfast', description: 'Bed and Breakfast meal plan description.' }
    ],
    rate: {id: '111', seasons: [{id:'112', name:'Temporada Baja', startDate: new Date(), endDate: new Date(new Date().setDate(new Date().getDate() + 3))}]},
    createdBy: 'Damian Lopez',
    updatedBy:'',
    updateDate: new Date(),
    },
  ]

  getHotels(){
    return this.hotels.slice();
  }

  getHotel(index: number){
    return this.hotels[index];
  }

  constructor() { }

  copyHotel(index: number){
    const copiedHotel = this.getHotel(index);
    this.hotels.push(copiedHotel);
    console.log(this.hotels);
  }


  saveHotel(hotel: Hotel){
    console.log(hotel);
  }
}
