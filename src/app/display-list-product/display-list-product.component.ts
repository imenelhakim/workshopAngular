import {Component, OnInit} from '@angular/core';
// import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../shared/product.service';

// import {EventEmitter} from 'events';

@Component({
  selector: 'app-display-list-product',
  templateUrl: './display-list-product.component.html',
  styleUrls: ['./display-list-product.component.css']
})
export class DisplayListProductComponent implements OnInit {

  // @Input() p:Product;
  // @Input() searchP: string;
  // @Output() notification = new EventEmitter<Product>();

  listProduct: Product[];

  deleteId: number;


  title: string;
  priceMax: number;

  //button hide form
  hideForm: boolean;

  //show form
  showForm() {
    this.hideForm = this.hideForm != true;
    // if (this.hideForm==true){
    //   this.hideForm=false;
    // }
    // else
    //   this.hideForm=true;

  }

  constructor(private serviceProduct: ProductService) {
  }

  ngOnInit(): void {
    this.hideForm = true;
    this.title = 'Product list';
    // this.listProduct = this.serviceProduct.getProducts();
    this.serviceProduct.getProductsWS().subscribe(
      (data: Product[]) => this.listProduct = data
    );

  };

  incrementLike(product: Product) {
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].likes++;
  }

  decrementQuantity(product: Product) {
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].quantity--;
  }

  pushProduct(p: Product) {
    this.listProduct.push(p);
    this.hideForm = true;
  }


  // deleteProduct(deleteId){
  //   this.serviceProduct.deleteProduct(deleteId).subscribe(
  //     ()=>this.listProduct=this.listProduct.filter(Product=>Product.id != deleteId)
  //   );
  // }

  // deleteProduct(p:Product){
  //   let i = this.listProduct.indexOf(p)+1;
  //   this.serviceProduct.deleteProduct(i).subscribe(
  //     ()=>this.listProduct=this.listProduct.filter(p=>p.id != i)
  //   );
  // }

  // getStat(){
  //   //parcours de la liste / donne les produits prix > 100
  // }


  // incrementLike(i:number){
  //   this.listProduct[i].likes++;
  // }
  //
  // decrementQuatity(i:number){
  //   this.listProduct[i].quantity--;
  // }

}

//
// sendNotif(){
//   this.notification.emit(this.p);
// }


