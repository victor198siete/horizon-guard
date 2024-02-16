import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit  {
  hotel?: Hotel;
  id?: number;
  editMode = false;

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

  onSubmit(){

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
