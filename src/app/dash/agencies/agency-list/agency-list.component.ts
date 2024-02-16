import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Agency } from '../agency.model';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {
  agencies?: Agency[];

  constructor(
    private agencySer: AgencyService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.agencies = this.agencySer.getAgencies();
    console.log(this.agencies);
  }



}
