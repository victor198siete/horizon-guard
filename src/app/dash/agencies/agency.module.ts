import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgencyRoutingModule } from './agency-routing.module'
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgenciesComponent } from './agencies.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { AgencyCreateComponent } from './agency-create/agency-create.component';
import { AgencyEditComponent } from './agency-edit/agency-edit.component';

@NgModule({
  declarations: [
    AgencyListComponent,
    AgencyDetailsComponent,
    AgencyCreateComponent,
    AgencyEditComponent,
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgencyRoutingModule,
  ]
})
export class AgencyModule { }
