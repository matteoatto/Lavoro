import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.css'],
})
export class DonnaComponent implements OnInit {
  donnaProducts: {
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
        this.donnaProducts = this.configService.getProductsByGender('WOMAN');
      } else {
        this.donnaProducts = this.configService.getProductsByCategoryAndGender(
          category,
          'WOMAN'
        );
      }
    });
  }

  addToCart(product: any) {
    this.configService.addToCart(product);
    product.quantity++
  }
}
