import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //objet de type Product
  //le role de ce composant est de lire les données de cet objet
  //@Input depuis display-list-component
  //go to display-list-component.html
  @Input() product:Product; //interaction html>ts


  searchProduct: string;

  constructor() { }

  ngOnInit(): void {

  }

  // incrementLike(i: number){
  //     this.listProduct[i].likes++;
  //     //
  // }

}
