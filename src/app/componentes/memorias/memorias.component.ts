import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-memorias',
  templateUrl: './memorias.component.html',
  styleUrls: ['./memorias.component.css']
})
export class MemoriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
