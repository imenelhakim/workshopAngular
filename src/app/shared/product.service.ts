import {Injectable} from '@angular/core';
import {Product} from '../../../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Event} from '../../../model/event';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  listProductShare: Product[];

  // getProducts() {
  //   this.listProductShare = [
  //     {
  //       id: 1,
  //       productName: 'bouquet de rose',
  //       category: 'Mariage',
  //       description: 'Ce bouquet illuminera votre soirée',
  //       price: 125,
  //       quantity: 150,
  //       likes: 0
  //     },
  //     {
  //       id: 2,
  //       productName: 'bouquet de tulipes',
  //       category: 'Anniversaire',
  //       description: 'Ce bouquet apportera de la joix',
  //       price: 50,
  //       quantity: 8,
  //       likes: 0
  //     }
  //   ];
  //   return this.listProductShare;
  // }

  url = 'http://localhost:3000/products/';

  //affichage
  getProductsWS() {
    return this.http.get<Product[]>(this.url);
  }

  //suppression
  deleteProductWS(id) {
    return this.http.delete(this.url + id);
  }

  //ajout
  postProduct(p: Product) {
    return this.http.post<Product>(this.url, p);
  }

  //affichage détail
  getProductWS(id): Observable<Product> {
    return this.http.get<Product>(this.url + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }
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

  //modification
  putProduct(product): Observable<Product> {
    return this.http.put<Product>(this.url + product.id, product);
  }

  searchProduct() {
  }

}
