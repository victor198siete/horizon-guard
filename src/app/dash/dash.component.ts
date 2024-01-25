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


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  toggleProductos() {
    this.productosCollapsed = !this.productosCollapsed;
    console.log(this.productosCollapsed);
  }

}
