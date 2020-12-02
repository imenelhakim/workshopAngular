import { Component, OnInit } from '@angular/core';
import {Event} from '../../../model/event';

@Component({
  selector: 'app-display-list-event',
  templateUrl: './display-list-event.component.html',
  styleUrls: ['./display-list-event.component.css']
})
export class DisplayListEventComponent implements OnInit {

  listEvent: Event[];

  title: string;
  eventNameSearch:string;

  //button hide form
  hideForm:boolean;

  //show form
  showForm(){
    if (this.hideForm==true){
      this.hideForm=false;
    }
    else
      this.hideForm=true;
  }

  //hide add form
  hideFormAdd(){
    this.hideForm=true;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.hideForm=true;
    this.title = 'Product list';
    this.listEvent = [
      {
        id:1,
        eventName:'Formation parfum',
        place:'Ariana',
        description:'Apprenez à créer vos propres parfums',
        guestsNumber:20,
        price:25
      }
    ];
  };

  pushEvent(e:Event){
    this.listEvent.push(e);
    this.hideForm=true;
  }

}
