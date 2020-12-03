import { Injectable } from '@angular/core';
import {Product} from '../../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  listProductShare: Product[];

  getProducts(){
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

  postProduct(){}
  putProduct(){}
  deleteProduct(){}
  searchProduct(){}

}
