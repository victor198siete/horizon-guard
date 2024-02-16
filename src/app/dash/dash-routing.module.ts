import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';
import { HomeComponent } from './home/home.component';
import { ReservationsModule } from './reservations/reservation.module';
import { HotelModule } from './hotels/hotel.module';
import { FlightModule } from './flights/flight.module';
import { AgencyModule } from './agencies/agency.module';
import { TicketModule } from './tickets/ticket.module';

const routes: Routes = [
  {
    path: '', component: DashComponent, children: [
      {path:'home', component: HomeComponent},
      {path:'reservations', loadChildren: ()=> import('./reservations/reservation.module').then(m => ReservationsModule)},
      {path:'hotels', loadChildren: ()=> import('./hotels/hotel.module').then(m => HotelModule)},
      {path:'flights', loadChildren: ()=> import('./flights/flight.module').then(m => FlightModule)},
      {path:'tickets', loadChildren: ()=> import('./tickets/ticket.module').then(m => TicketModule)},
      {path:'agencies', loadChildren: ()=> import('./agencies/agency.module').then(m => AgencyModule)},
    ]
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashRoutingModule{}
