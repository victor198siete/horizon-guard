import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {
    path: '', component: ReservationsComponent, children: [
      { path: '', component: ReservationListComponent },
    ]
  },
  { path: 'create', component: ReservationsComponent},
  { path: ':id', component: ReservationsComponent },
  { path: ':id/edit', component: ReservationsComponent },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ReservationRoutingModule{}
