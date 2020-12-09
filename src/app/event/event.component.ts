import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../model/event';
import {FormControl} from '@angular/forms';
import {EventService} from '../shared/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() evenement: Event;
  @Input() eventNameSearchInput: string;


  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.eventService.deleteEventWS(id).subscribe();
    Swal.fire('The event has been deleted!', '---', 'success');
  }


}
