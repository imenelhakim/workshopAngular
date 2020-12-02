import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../model/event';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() evenement:Event;
  @Input() eventNameSearchInput:string;

  constructor() { }

  ngOnInit(): void {
  }

}
