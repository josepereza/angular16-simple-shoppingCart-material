import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carrito:boolean=false;
  private cartProducts:Product[]=[]
  private _products:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>([])

  constructor() { }
get products(){
  return this._products.asObservable();
}
  addNewProduct(product:Product){
this.cartProducts.push(product);
this._products.next(this.cartProducts)
  }
  abrir_cerrarCarrito(){
    this.carrito= !this.carrito
  }
  get cantidadProductos(){
    return this.cartProducts.length
  }

  deleteProducto(index:number){
this.cartProducts.splice(index,1)
this._products.next(this.cartProducts)
  }
}
