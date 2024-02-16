import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlightService } from '../flight.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights?: Flight[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flightSer: FlightService
  ){}

  ngOnInit(): void {
    this.flights = this.flightSer.getFlights();
    console.log(this.flights);
  }
}
