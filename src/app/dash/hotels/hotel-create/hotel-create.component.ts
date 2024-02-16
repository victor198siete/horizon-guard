import { Component, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { HotelService } from '../hotel.service';
import { Hotel } from '../index';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent {

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    name: ['', Validators.required],
    provider: ['', Validators.required],
    activated: [Validators.required],
    description: ['', Validators.required],
    rating: ['', Validators.required],
    amenities: ['', Validators.required],
    destiny: ['', Validators.required],
    country: ['', Validators.required],
    currency: ['', Validators.required],
    address: ['', Validators.required],
    zip: ['', Validators.required],

  });

  constructor(
    private router: Router,
    private hotelSer: HotelService
  ){}

  saveHotel(){
    // if (this.form.invalid) return;

    console.log(this.form.controls.activated.value);

    const newHotel: Hotel = {
      isActive: true,
      name: this.form.controls.name.value!,
      suplierAgency: this.form.controls.provider.value!,
      hotelChain: 'hotel Chain',
      rating: 4,
      destiny: this.form.controls.destiny.value!,
      country: this.form.controls.country.value!,
      zip: '75000',
      phone: 9876543322,
      email: 'newhotel@newhotel.com',
      description: this.form.controls.description.value!,
      imagePath: './../../../assets/images/hotels/melia-internacional.png',
      amenities: ['Piscina', 'Wifi'],
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
    }

    console.log('Nuevo Hotel: ' + newHotel);

    this.hotelSer.saveHotel(
      newHotel
    );

  this.hotelSer.saveHotel(newHotel);
  this.router.navigateByUrl('/dash/hotels/');
  }
}
