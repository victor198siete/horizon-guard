import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotels?: Hotel[];

  constructor(
    private hotelSer: HotelService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.hotels = this.hotelSer.getHotels();
    console.log(this.hotels);
  }

  createNewHotel(){
    console.log('navigateByUrl')
    this.router.navigateByUrl('dash/hotels/create');
  }
}
