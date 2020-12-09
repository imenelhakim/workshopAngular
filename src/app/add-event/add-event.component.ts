import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '../../../model/event';
import {EventService} from '../shared/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  //1- declaration du formulaire qui contient tout les input
  addEventForm: FormGroup;

  @Output() notifHide = new EventEmitter();

  constructor(private eventService: EventService) {
  }

  hideForm: true;
  event: Event;

  hideFormAdd() {
    //envoi notification au parent hideForm==false;
    this.notifHide.emit(this.hideForm);
  }

  save() {
    this.eventService.postEvent(this.addEventForm.value).subscribe();
    Swal.fire('The event has been added!', '---', 'success');
  }

  // idEvent = new FormControl('', Validators.required);
  // nomEvent = new FormControl('');
  // lieuEvent = new FormControl('');
  // descriptionEvent = new FormControl('');
  // nbGuestsEvent = new FormControl('');
  // priceEvent = new FormControl('');

  ngOnInit(): void {

    this.event = new Event();

    this.addEventForm = new FormGroup(
      {
        id: new FormControl(),
        eventName: new FormControl('', [Validators.required, Validators.minLength(5)]),
        place: new FormControl('', [Validators.required, Validators.minLength(5)]),
        description: new FormControl('', [Validators.required, Validators.minLength(10)]),
        guestsNumber: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
      }
    );
  }

  onSubmit() {
    console.log(this.addEventForm.value);
    alert('succes' + JSON.stringify(this.addEventForm.value, null, 4));
  }

  // //reset form works perfectly
  // reset(){
  //   this.addEventForm.reset();
  // }
}
