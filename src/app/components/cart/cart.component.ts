import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() wartosc: number = 0;
  @Output() resetKoszykEvent = new EventEmitter<void>();

  resetKoszyk() {
    this.resetKoszykEvent.emit();
  }
}