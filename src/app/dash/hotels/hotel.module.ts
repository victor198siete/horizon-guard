import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelItemComponent } from './hotel-list/hotel-item/hotel-item.component';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelItemComponent,
    HotelsComponent,
    HotelDetailsComponent,
    HotelCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
