import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sklep TAIiB';
  
  products: Product[] = [
    new Product('Produkt 1', 20.00, new Date('2001-09-30'), false),
    new Product('Produkt 2', 35.50, new Date('2002-10-15'), true),
    new Product('Produkt 3', 10.99, new Date('2003-03-25'), false),
    new Product('Produkt 4', 59.99, new Date('2004-07-10'), true),
    new Product('Produkt 5', 15.50, new Date('2005-12-20'), false),
  ];
  
  wartoscKoszyka = 0;
  pokazProdukty = true;
  
  dodajDoKoszyka(cena: number) {
    this.wartoscKoszyka += cena;
  }
  
  toggleProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }

  resetKoszyk() {
    this.wartoscKoszyka = 0;
    this.products.forEach(product => product.iloscWKoszyku = 0);
  }
}