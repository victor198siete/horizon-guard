import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.model';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotels?: Hotel[];

  constructor(
    private hotelSer: HotelService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.hotels = this.hotelSer.getHotels();
    console.log(this.hotels);
  }

  onEditHotel(index: number){
    this.router.navigate(['../hotels', index, 'edit'], { relativeTo: this.route })
  }

  onCopyHotel(index: number){
    const hotel = this.hotels![index];
    console.log("Copiar hotel:" + hotel.name);
    this.hotelSer.copyHotel(index);
    this.hotels = this.hotelSer.getHotels();
  }

  createNewHotel(){
    console.log('navigateByUrl')
    this.router.navigateByUrl('dash/hotels/create');
  }
}
