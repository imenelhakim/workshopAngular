import { Injectable } from '@angular/core';
import {Event} from '../../../model/event';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../../../model/product';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'  //une instatnce se crée dès l'execution de l'app
})
export class EventService {

  listEventShare: Event[];
  errorHandler(error) {
    debugger

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http:HttpClient) { }




  // getEvents(){
  //   this.listEventShare = [
  //     {
  //       id:1,
  //       eventName:'Formation parfum',
  //       place:'Ariana',
  //       description:'Apprenez à créer vos propres parfums',
  //       guestsNumber:20,
  //       price:25
  //     }
  //   ];
  //   return this.listEventShare;
  // }

  url='http://localhost:3000/events/';

  //suppression
  deleteEventWS(id){
    return this.http.delete(this.url+id);
  }
  //ajout
  postEvent(e:Event){
    return this.http.post<Event>(this.url,e);
  }
  //afichage liste
  getEventsWS(){
    return this.http.get<Event[]>(this.url);
  }
  //affichage détail
  getEventWS(id): Observable<Event> {
    return this.http.get<Event>(this.url + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  //modification
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  putEvent(id:number,e:Event): Observable<Event>{
    return this.http.put<Event>(this.url+id,e,this.httpOptions);
  }

  searchEvent(){}
}
