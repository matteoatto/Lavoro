import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css'],
})
export class ScarpeComponent implements OnInit {
  scarpeProducts: {
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
      this.scarpeProducts = this.configService.getProductsByCategoryAndGender(
        'SHOES',
        gender
      );
    });
  }

  addToCart(product: any) {
    this.configService.addToCart(product);
    product.quantity++
  }


  
}



