import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cadastro: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
