import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HotelModule } from './hotels/hotel.module';

const routes: Routes = [
  {
    path: '', component: DashComponent, children: [
      {path:'home', component: HomeComponent},
      {path:'hotels', loadChildren: ()=> import('./hotels/hotel.module').then(m => HotelModule)},
      {path:'flights', component: FlightsComponent},
      {path:'tickets', component: TicketsComponent},
    ]
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashRoutingModule{}
