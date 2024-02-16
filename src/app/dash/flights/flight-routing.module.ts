import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsComponent } from './flights.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  {
    path: '', component: FlightsComponent, children: [
        { path: '', component: FlightListComponent },
      ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class FlightRoutingModule{}
