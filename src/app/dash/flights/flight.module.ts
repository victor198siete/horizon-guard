import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlightRoutingModule } from './flight-routing.module';

import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightListComponent,
    FlightCreateComponent,
    FlightDetailsComponent,
    FlightEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
