import {Injectable} from '@angular/core';
import {Product} from '../../../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  listProductShare: Product[];

  getProducts() {
    this.listProductShare = [
      {
        id: 1,
        productName: 'bouquet de rose',
        category: 'Mariage',
        description: 'Ce bouquet illuminera votre soirée',
        price: 125,
        quantity: 150,
        likes: 0
      },
      {
        id: 2,
        productName: 'bouquet de tulipes',
        category: 'Anniversaire',
        description: 'Ce bouquet apportera de la joix',
        price: 50,
        quantity: 8,
        likes: 0
      }
    ];
    return this.listProductShare;
  }

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

  searchProduct() {
  }

}
