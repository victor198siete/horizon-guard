import { Injectable } from '@angular/core';
import { Agency } from './agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private agencies: Agency[] = [
    {
      name: 'Gaviota Tours',
      isActive: true,
      invoiceName: 'Gaviota Tours SA de CV',
      rfc: 'gav123qwe',
      description: 'Cuban Suplier Agency',
      imagePath: './../../../assets/images/agencies/agency-gaviota-tours.jpg',
      destiny: 'Varadero',
      country: 'Cuba',
      contactName: 'José Perez',
      contactEmail: 'jose@gaviotatours.com',
      contactPhoneNumber: '+5353556677'
    },
    {
      name: 'Viajes Libero',
      isActive: true,
      invoiceName: 'Viajes Libero SA de CV',
      rfc: 'VLI123qwe',
      description: 'Mexican Suplier Agency',
      imagePath: './../../../assets/images/agencies/agency-viajes-libero.jpg',
      destiny: 'Cancún',
      country: 'Mexico',
      contactName: 'Ana Bolio',
      contactEmail: 'ana@viajeslibero.com',
      contactPhoneNumber: '+52 998123456'
    },
    {
      name: 'Horizontes Travels',
      isActive: true,
      invoiceName: 'Horizontes Travels LLC',
      rfc: 'HTR123qwe',
      description: 'USA Suplier Agency',
      imagePath: './../../../assets/images/agencies/agency-horizontes.jpg',
      destiny: 'Las Vegas',
      country: 'USA',
      contactName: 'Leisy León',
      contactEmail: 'leisy@horizontes.com',
      contactPhoneNumber: '+170 607123456'
    },
  ];

  getAgencies(){
    return this.agencies.slice();
  }

  getAgency(index: number){
    return this.agencies[index];
  }

  constructor() { }
}
