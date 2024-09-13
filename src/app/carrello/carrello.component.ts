import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.configService.getCartObservable().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(product: any) {
    this.configService.confirmRemoveFromCart(product);
  }

  increaseProduct(product: any) {
    this.configService.increaseProduct(product);
  }

  reduceProduct(product: any) {
    if (product.quantity > 1) {
      this.configService.reduceProduct(product);
    } else if (product.quantity === 1) {
      this.configService.confirmRemoveFromCart(product);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  orderCart() {
    Swal.fire({
      icon: "success",
      title: "Ordine Effettuato",
      showConfirmButton: false,
      timer: 1500,
      showCloseButton: true
    }).then(() => {
      this.configService.clearCart();
      this.router.navigate(['/dashboard/home/tutto']);
    });
  }
}
