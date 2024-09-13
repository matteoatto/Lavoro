import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeProducts: {
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
      const category = params.get('category');
      if (category) {
        this.homeProducts = this.configService.getProductsByCategory(category);
      } else {
        this.homeProducts = this.configService.getAllProducts();
      }
    });
  }


  addToCart(product: any) {
    this.configService.addToCart(product);
  }
}
