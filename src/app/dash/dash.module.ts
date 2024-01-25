import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DashRoutingModule } from './dash-routing.module';
import { HotelModule } from './hotels/hotel.module'
import { FlightsComponent } from './flights/flights.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    HomeComponent,
    FlightsComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashRoutingModule,
    HotelModule,
  ]
})
export class DashModule { }
