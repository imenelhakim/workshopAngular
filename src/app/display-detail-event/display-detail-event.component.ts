import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display-detail-event',
  templateUrl: './display-detail-event.component.html',
  styleUrls: ['./display-detail-event.component.css']
})
export class DisplayDetailEventComponent implements OnInit {

  //injection de service
  constructor( private service: ActivatedRoute) { }

  id:number;

  ngOnInit(): void {
    console.log(this.service.snapshot.params.id);
    this.id=this.service.snapshot.params.id;
  }

}
