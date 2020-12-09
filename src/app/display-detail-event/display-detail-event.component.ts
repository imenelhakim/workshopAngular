import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../../../model/event';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-display-detail-event',
    templateUrl: './display-detail-event.component.html',
    styleUrls: ['./display-detail-event.component.css']
})
export class DisplayDetailEventComponent implements OnInit {


    constructor(private service: ActivatedRoute, private serviceEvent: EventService) {
    }

    DetailEvent: Event;

    id: number;

    ngOnInit(): void {

        this.id = this.service.snapshot.params.id;
        // console.log(this.service.snapshot.params.id);

        this.serviceEvent.getEventWS(this.id)
            .subscribe((data: Event) => {
                this.DetailEvent = data;
                console.log(this.DetailEvent);
            });
    }

    update() {
        this.serviceEvent.putEvent(this.DetailEvent).subscribe();
        console.log(this.DetailEvent);
        Swal.fire('The event has been updated!', '---', 'success');
    }

    // update(id:number,e:Event){
    //   this.serviceEvent.putEvent(id,e).subscribe();
    //   console.log(this.DetailEvent);
    //   Swal.fire('The event has been updated!', '---', 'success');
    // }


}

