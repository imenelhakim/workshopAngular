import { Component, OnInit } from '@angular/core';
import {Event} from '../../../model/event';
import {EventService} from '../shared/event.service';
import {Product} from '../../../model/product';

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

  constructor(private serviceEvent: EventService) {
  }

  ngOnInit(): void {
    this.hideForm=true;
    this.title = 'Product list';
    // this.listEvent=this.serviceEvent.getEvents();
    this.serviceEvent.getEventsWS().subscribe(
      (data:Event[])=>this.listEvent=data
    );
  };

  pushEvent(e:Event){
    this.listEvent.push(e);
    this.hideForm=true;
  }

}
