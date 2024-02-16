import { Component, OnInit } from '@angular/core';

import { Ticket } from '../ticket.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets?: Ticket[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketSer: TicketService
  ){}

  ngOnInit(): void {
    this.tickets = this.ticketSer.getTickets();
    console.log(this.tickets);
  }

}
