import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  currentLanguage: string = 'it'; // Imposta la lingua predefinita

  constructor(
    private configService: ConfigService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Sottoscrivi l'osservabile del carrello per aggiornare il conteggio degli articoli
    this.configService.getCartObservable().subscribe(cartItems => {
      this.cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    });

    // Imposta la lingua corrente all'avvio del componente
    this.currentLanguage = this.translate.currentLang || 'it';
  }

  onSearch(query: string, searchInput: HTMLInputElement): void {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery === 'home') {
      this.router.navigate(['/dashboard/home']);
    } else if (trimmedQuery === 'uomo') {
      this.router.navigate(['/dashboard/uomo']);
    } else if (trimmedQuery === 'donna') {
      this.router.navigate(['/dashboard/donna']);
    } else if (['tutto', 't-shirt', 'scarpe', 'pantaloncini'].includes(trimmedQuery)) {
      this.router.navigate(['/dashboard/home', trimmedQuery]);
    } else { 
      console.log(`No route found for query: ${trimmedQuery}`);
    }

    searchInput.value = '';
  }

  changeLanguage(language: string): void {

    this.currentLanguage = language;


    this.translate.use(language);
  }
}
