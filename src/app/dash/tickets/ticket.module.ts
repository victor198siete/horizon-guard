import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsComponent } from './tickets.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { RouterModule } from '@angular/router';
import { TicketsRoutingModule } from './tickets-routing.module';



@NgModule({
  declarations: [
    TicketsComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketDetailsComponent,
    TicketEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TicketsRoutingModule
  ]
})
export class TicketModule { }
