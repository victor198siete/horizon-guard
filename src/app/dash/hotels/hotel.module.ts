import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelItemComponent } from './hotel-list/hotel-item/hotel-item.component';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    HotelCreateComponent,
    HotelDetailsComponent,
    HotelEditComponent,
    HotelItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HotelRoutingModule,
    ReactiveFormsModule
  ]
})
export class HotelModule { }
