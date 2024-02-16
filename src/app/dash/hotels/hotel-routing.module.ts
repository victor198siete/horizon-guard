import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './hotels.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

const routes: Routes = [
  {
    path: '', component: HotelsComponent, children: [
      { path: '', component: HotelListComponent },
    ]
  },
  { path: 'create', component: HotelCreateComponent},
  { path: ':id', component: HotelDetailsComponent },
  { path: ':id/edit', component: HotelEditComponent },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HotelRoutingModule{}
