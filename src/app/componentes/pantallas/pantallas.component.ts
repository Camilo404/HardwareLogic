import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-pantallas',
  templateUrl: './pantallas.component.html',
  styleUrls: ['./pantallas.component.css']
})
export class PantallasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
