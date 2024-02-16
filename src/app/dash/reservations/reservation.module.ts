import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReservationRoutingModule
  ]
})
export class ReservationsModule { }
