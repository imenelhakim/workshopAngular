import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  //1- declaration du formulaire qui contient tout les input
  addEventForm : FormGroup;

  @Output() notifHide = new EventEmitter();

  hideForm:true;

  hideFormAdd(){
    //envoi notification au parent hideForm==false;
    this.notifHide.emit(this.hideForm);
  }

  // idEvent = new FormControl('', Validators.required);
  // nomEvent = new FormControl('');
  // lieuEvent = new FormControl('');
  // descriptionEvent = new FormControl('');
  // nbGuestsEvent = new FormControl('');
  // priceEvent = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.addEventForm = new FormGroup(
      {
        idEvent:new FormControl('', Validators.required),
        nomEvent:new FormControl('', [Validators.required, Validators.minLength(5)]),
        lieuEvent:new FormControl('', [Validators.required, Validators.minLength(5)]),
        descriptionEvent:new FormControl('', [Validators.required, Validators.minLength(10)]),
        nbGuestsEvent:new FormControl('', Validators.required),
        priceEvent:new FormControl('', Validators.required)
      }
    );
  }

  onSubmit(){
    console.log(this.addEventForm.value);
    alert('succes'+JSON.stringify(this.addEventForm.value,null,4));
  }

  // //reset form works perfectly
  // reset(){
  //   this.addEventForm.reset();
  // }
}
