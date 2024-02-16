import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations?: Reservation[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reservationsSer: ReservationsService
  ){}

  ngOnInit(): void {
    this.reservations = this.reservationsSer.getReservations();
  }
}
