import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProduct:Product[];
  searchProduct: string;

  constructor() { }

  ngOnInit(): void {
    this.listProduct = [
      { id: 1, productName: 'bouquet de rose', category: 'Mariage', description: 'Ce bouquet illuminera votre soirée', price: 125, quantity: 150, likes: 0},
       {id: 2, productName: 'bouquet de tulipes', category: 'Anniversaire', description: 'Ce bouquet apportera de la joix', price: 50, quantity: 150, likes: 0}
    ];

  }

  incrementLike(i: number){
      this.listProduct[i].likes++;
      //
  }

}
