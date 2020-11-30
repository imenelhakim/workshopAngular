import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleHome = 'Nawara';
  paragraph = 'The first online bouquets shop in Tunisia !';

  constructor() { }

  ngOnInit(): void {
  }

}
