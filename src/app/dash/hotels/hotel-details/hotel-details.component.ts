import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel?: Hotel;
  id?: number;

  constructor(
    private hotelSer: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.hotel = this.hotelSer.getHotel(this.id!);
      }
    )
    console.log(this.id);
    console.log(this.hotel);
  }
}
