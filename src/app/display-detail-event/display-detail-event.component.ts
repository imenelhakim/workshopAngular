import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../../../model/event';

@Component({
  selector: 'app-display-detail-event',
  templateUrl: './display-detail-event.component.html',
  styleUrls: ['./display-detail-event.component.css']
})
export class DisplayDetailEventComponent implements OnInit {

  //injection de service
  constructor( private service: ActivatedRoute, private serviceEvent : EventService) { }

  id:number;
  listEvent: Event[];

  ngOnInit(): void {
    this.id=this.service.snapshot.params.id;
    console.log(this.service.snapshot.params.id);
    this.listEvent = this.serviceEvent.getEvents();
    console.log(this.serviceEvent.getEvents());
  }

}
