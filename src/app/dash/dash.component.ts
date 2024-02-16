import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  isOpen?: boolean = false;
  productosCollapsed = false;
  reservasCollapsed = false;
  usersCollapsed = false;
  frontendCollapsed = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  toggleReservas(){
    this.reservasCollapsed = !this.reservasCollapsed;
  }

  toggleProductos() {
    this.productosCollapsed = !this.productosCollapsed;
  }

  toggleUsers() {
    this.usersCollapsed = !this.usersCollapsed;
  }

  toggleFrontend() {
    this.frontendCollapsed = !this.frontendCollapsed;
  }

}
