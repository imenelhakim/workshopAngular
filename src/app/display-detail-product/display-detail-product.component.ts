import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {Product} from '../../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-display-detail-product',
  templateUrl: './display-detail-product.component.html',
  styleUrls: ['./display-detail-product.component.css']
})
export class DisplayDetailProductComponent implements OnInit {

  constructor(private service: ActivatedRoute, private serviceProduct: ProductService) { }
  DetailProduct: Product;

  id: number;

  ngOnInit(): void {

    this.id = this.service.snapshot.params.id;
    // console.log(this.service.snapshot.params.id);

    this.serviceProduct.getProductWS(this.id)
      .subscribe((data: Product) => {
        this.DetailProduct = data;
        console.log(this.DetailProduct);
      });

  }


  update() {
    this.serviceProduct.putProduct(this.DetailProduct).subscribe();
    console.log(this.DetailProduct);
    Swal.fire('The product has been updated!', '---', 'success');
  }

}
