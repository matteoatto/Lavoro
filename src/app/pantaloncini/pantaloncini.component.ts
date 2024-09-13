import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-scarpe',
  templateUrl: './Pantaloncini.component.html',
  styleUrls: ['./pantaloncini.component.css'],
})
export class PantalonciniComponent implements OnInit {
  pantalonciniProducts: {
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
      this.pantalonciniProducts =
        this.configService.getProductsByCategoryAndGender(
          'SHORTS',
          gender
        );
    });
  }

  addToCart(product: any) {
    this.configService.addToCart(product);
    product.quantity++
  }
}
