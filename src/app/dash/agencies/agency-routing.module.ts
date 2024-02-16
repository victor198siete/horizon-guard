import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgenciesComponent } from './agencies.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyCreateComponent } from './agency-create/agency-create.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { AgencyEditComponent } from './agency-edit/agency-edit.component';

const routes: Routes = [
  {
    path: '', component: AgenciesComponent, children: [
      { path: '', component: AgencyListComponent },
    ]
  },
  { path: 'create', component: AgencyCreateComponent},
  { path: ':id', component: AgencyDetailsComponent },
  { path: ':id/edit', component: AgencyEditComponent },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AgencyRoutingModule{}
