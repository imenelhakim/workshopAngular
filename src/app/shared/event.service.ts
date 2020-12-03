import { Injectable } from '@angular/core';
import {Event} from '../../../model/event';

@Injectable({
  providedIn: 'root'  //une instatnce se crée dès l'execution de l'app
})
export class EventService {

  listEventShare: Event[];

  constructor() { }

  getEvents(){
    this.listEventShare = [
      {
        id:1,
        eventName:'Formation parfum',
        place:'Ariana',
        description:'Apprenez à créer vos propres parfums',
        guestsNumber:20,
        price:25
      }
    ];
    return this.listEventShare;
  }

  postEvent(){}
  putEvent(){}
  deleteEvent(){}
  searchEvent(){}
}
