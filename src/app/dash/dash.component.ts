import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  isOpen?: boolean = false;

  constructor(){}

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

}
