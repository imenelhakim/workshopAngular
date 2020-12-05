import { Injectable } from '@angular/core';
import {Event} from '../../../model/event';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../model/product';

@Injectable({
  providedIn: 'root'  //une instatnce se crée dès l'execution de l'app
})
export class EventService {

  listEventShare: Event[];

  constructor(private http:HttpClient) { }

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

  url='http://localhost:3000/events/';

  getEventsWS(){
    return this.http.get<Event[]>(this.url);
  }
  //suppression
  deleteEventWS(id){
    return this.http.delete(this.url+id);
  }
  //ajout
  postEvent(e:Event){
    return this.http.post<Event>(this.url,e);
  }

  putEvent(){}
  searchEvent(){}
}
