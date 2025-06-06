import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodajDoKoszykaEvent = new EventEmitter<number>();

  dodajDoKoszyka() {
    this.product.iloscWKoszyku++;
    this.dodajDoKoszykaEvent.emit(this.product.cena);
  }
}