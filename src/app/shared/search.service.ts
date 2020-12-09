import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  searchByAny(list: any, criteria: string, val: any) {
    let n = 0;
    for (let i in list) {
      if (list[i][criteria] === val) {
        n++;
      }
    }
    return n;
  }
}
