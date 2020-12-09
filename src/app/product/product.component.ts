import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../shared/product.service';
import Swal from 'sweetalert2';


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
  @Input() product: Product; //interaction html>ts

  //envoyer un output au parent
  @Output() notification = new EventEmitter<Product>();
  @Output() notificationDecrement = new EventEmitter<Product>();

  //recherche
  @Input() priceMaxInput: number;

  //delete notif
  @Output() notifDelete = new EventEmitter();

  // searchProduct: string;

  constructor(private serviceProduct: ProductService) {
  }

  ngOnInit(): void {

  }

  //passer l'objet au parent
  sendNotif() {
    this.notification.emit(this.product);
  }

  sendNotifDecrement() {
    this.notificationDecrement.emit(this.product);
  }

  delete(id) {
    this.serviceProduct.deleteProductWS(id).subscribe();
    Swal.fire('Hi', 'The product has been deleted!', 'success');
  }

  // deleteProduct(id){
  //   this.serviceProduct.deleteProduct(id).subscribe();
  // }


  // incrementLike(i: number){
  //     this.listProduct[i].likes++;
  //     //
  // }

}
