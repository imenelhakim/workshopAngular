import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleHome: string;
  paragraph: string;

  constructor() {
  }

  ngOnInit(): void {
    this.titleHome = 'Nawara';
    this.paragraph = 'The first online bouquets shop in Tunisia !';
  }

}
