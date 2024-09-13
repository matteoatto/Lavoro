import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css'],
})
export class UomoComponent implements OnInit {
  uomoProducts: {
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
      const category = params.get('category') || 'ALL';
      if (category === 'ALL') {
        this.uomoProducts = this.configService.getProductsByGender('MAN');
      } else {
        this.uomoProducts = this.configService.getProductsByCategoryAndGender(
          category,
          'MAN'
        );
      }
    });
  }

  addToCart(product: any) {
    this.configService.addToCart(product);
    product.quantity++;
  }
}
