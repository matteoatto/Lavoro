import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  private products = [
    {
      id: 1,
      image: 'assets/image/maglia1.jpg',
      title: 'T-Shirt Nike',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 39.99 
    },

    {
      id:2,
      image: 'assets/image/maglia2.jpg',
      title: 'T-Shirt Adidas',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 34.99
    },

    {
      id:3,
      image: 'assets/image/scarpe1.jpg',
      title: 'Nike Air force 1',
      category: 'SHOES',
      gender: 'MAN',
      quantity:0,
      price: 99.99
    },

    {
      id:4,
      image: 'assets/image/maglia3.jpg',
      title: 'T-Shirt con grafica',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 24.99
    },
  
    {
      id:5,
      image: 'assets/image/maglia4.jpg',
      title: 'T-Shirt Nera',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 14.99
    },

    {
      id:6,
      image: 'assets/image/maglia5.jpg',
      title: 'T-Shirt bianca',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 14.99
    },

    {
      id:7,
      image: 'assets/image/maglia6.jpg',
      title: 'T-Shirt California ',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 25.99
    },

    {
      id:8,
      image: 'assets/image/maglia7.jpg',
      title: 'T-Shirt Guess',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 29.99
    },

    {
      id:9,
      image: 'assets/image/maglia8.jpg',
      title: 'T-Shirt EA7',
      category: 'T-SHIRT',
      gender: 'MAN',
      quantity:0,
      price: 27.99
    },

    {
      id:10,
      image: 'assets/image/maglia9.jpg',
      title: 'T-Shirt Guess',
      category: 'T-SHIRT',
      gender: 'WOMAN',
      quantity:0,
      price: 24.99
    },

    {
      id:11,
      image: 'assets/image/maglia10.jpg',
      title: 'T-Shirt Bianca',
      category: 'T-SHIRT',
      gender: 'WOMAN',
      quantity:0,
      price: 14.99
    },

    {
      id:12,
      image: 'assets/image/maglia11.jpg',
      title: 'T-Shirt Malibu',
      category: 'T-SHIRT',
      gender: 'WOMAN',
      quantity:0,
      price: 17.99
    },

    {
      id:13,
      image: 'assets/image/maglia12.jpg',
      title: 'T-Shirt Grafica',
      category: 'T-SHIRT',
      gender: 'WOMAN',
      quantity:0,
      price: 26.99
    },

    {
      id:14,
      image: 'assets/image/scarpe2.jpg',
      title: 'Scarpe air zoom',
      category: 'SHOES',
      gender: 'WOMAN',
      quantity:0,
      price: 89.99
    },
    
    {
      id:15,
      image: 'assets/image/pantaloncini1.jpg',
      title: 'Pantaloncini Nike',
      category: 'SHORTS',
      gender: 'WOMAN',
      quantity:0,
      price: 33.99
    },
    {
      id:16,
      image: 'assets/image/pantaloncini2.jpg',
      title: 'Pantaloncini Nike',
      category: 'SHORTS',
      gender: 'WOMAN',
      quantity:0,
      price: 39.99
    },
    {
      id:17,
      image: 'assets/image/maglia13.jpg',
      title: 'T-Shirt Los Angeles',
      category: 'T-SHIRT',
      gender: 'WOMAN',
      quantity:0,
      price: 20.99
    },
  ];

  getProductsByGender(gender: string) {
    return this.products.filter((product) => product.gender.toUpperCase() === gender.toUpperCase());
  }

  getProductsByCategory(category: string) {
    return this.products.filter((product) => product.category.toUpperCase() === category.toUpperCase());
  }

  getProductsByCategoryAndGender(category: string, gender: string) {
    return this.products.filter(
      (product) =>
        product.category.toUpperCase() === category.toUpperCase() &&
        product.gender.toUpperCase() === gender.toUpperCase()
    );
  }

  getAllProducts() {
    return this.products;
  }

  addToCart(selectedProduct: any) {
    const existingProduct = this.cart.find(
      (product) => product.id === selectedProduct.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const productToAdd = { ...selectedProduct, quantity: 1 };
      this.cart.push(productToAdd);
    }

    this.cartSubject.next(this.cart);

    Swal.fire({
      icon: 'success',
      title: `${selectedProduct.title} è stato aggiunto al carrello.`,
      showConfirmButton: false,
      timer: 1500,
      showCloseButton: true,
    });
  }

  getCartItems() {
    return this.cart;
  }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  confirmRemoveFromCart(selectedProduct: any): void {
    Swal.fire({
      title: 'Sei sicuro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sì, rimuovilo!',
      cancelButtonText: 'Annulla',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeFromCart(selectedProduct);
        Swal.fire({
          icon: 'success',
          title: 'Rimosso!',
          text: `${selectedProduct.title} è stato rimosso dal carrello.`,
          showCloseButton: true,
        });
      }
    });
  }

  removeFromCart(selectedProduct: any) {
    const index = this.cart.findIndex((product) => product.id === selectedProduct.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.cartSubject.next(this.cart);
  }

  increaseProduct(product: any) {
    product.quantity++;
    this.cartSubject.next(this.cart);
  }

  reduceProduct(product: any) {
    product.quantity--;
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}