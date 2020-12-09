import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../shared/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  id:number;

  listProduct: Product[];

  //decla objet vide
  product:Product;

  @Output() eventSaveProduct = new EventEmitter<Product>();

  // save(){
  //   this.product.likes=0;
  //   this.eventSaveProduct.emit(this.product);
  // }

  save(){
    this.product.likes=0;
    this.productService.postProduct(this.product).subscribe();
    Swal.fire('The product has been added!', '---', 'success');
  }


  ngOnInit(): void {

    this.product = new Product();

  //   //liste products
  //   this.listProduct = [
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
  //
  };

}


