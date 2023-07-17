import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  total: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.products
      .pipe(
        map((products) => products.reduce((prev, curr) => prev + curr.price,0))
      )
      .subscribe((data) => {
        this.total = data;
      });
  }
}
