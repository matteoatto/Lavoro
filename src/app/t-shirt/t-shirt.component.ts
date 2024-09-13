import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './T-shirt.component.html',
  styleUrls: ['./t-shirt.component.css'],
})
export class TshirtComponent implements OnInit {
  tshirtProducts: {
    image: string;
    title: string;
    price: number;
    gender: string;
    category: string;
  }[] = [];

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const gender = params.get('gender') || 'MAN'; 
      this.tshirtProducts = this.configService.getProductsByCategoryAndGender(
        'T-SHIRT',
        gender
      );
    });
  }

  addToCart(product: any) {
    this.configService.addToCart(product);
    product.quantity++
  }
}



