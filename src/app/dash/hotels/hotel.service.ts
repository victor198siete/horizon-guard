import { Injectable } from '@angular/core';

import { Hotel } from './hotel.model'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels: Hotel[] = [
  { name: 'Barcelo Solymar',
    suplierAgency: 'Barcelo',
    isActive: true,
    description: 'Descripción del Hotel Barcelo Solymar',
    imagePath: './../../../assets/images/hotels/barcelo-solymar.png',
    rating: '4.5',
    amenities: ['Wi-Fi', 'Piscina', 'Estacionamiento'],
    destiny: 'Varadero',
    country: 'Cuba',
    currency: 'USD',
    roomList: ['Habitación Estándar', 'Suite Ejecutiva']
  },
  { name: 'Melia Internacional',
    suplierAgency: 'Melia',
    isActive: true,
    description: 'Descripción del Hotel Melia Internacional',
    imagePath: './../../../assets/images/hotels/melia-internacional.png',
    rating: '4.5',
    amenities: ['Wi-Fi', 'Piscina', 'Estacionamiento'],
    destiny: 'Varadero',
    country: 'Cuba',
    currency: 'USD',
    roomList: ['Habitación Estándar', 'Suite Ejecutiva']
  },
  { name: 'Sirenis Tropical Varadero',
    suplierAgency: 'Melia',
    isActive: false,
    description: 'Descripción del Hotel Sirenis Tropical Varadero',
    imagePath: './../../../assets/images/hotels/sirenis-tropical-varadero.png',
    rating: '4.5',
    amenities: ['Wi-Fi', 'Piscina', 'Estacionamiento'],
    destiny: 'Varadero',
    country: 'Cuba',
    currency: 'USD',
    roomList: ['Habitación Estándar', 'Suite Ejecutiva']
  },
  ];

  getHotels(){
    return this.hotels.slice();
  }

  getHotel(index: number){
    return this.hotels[index];
  }

  constructor() { }
}
