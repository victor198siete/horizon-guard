import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent {

  constructor(
    private router: Router
  ){}

  saveHotel(){
  console.log('Save Hotel!');
  this.router.navigateByUrl('/dash/hotels/');
  }
}
