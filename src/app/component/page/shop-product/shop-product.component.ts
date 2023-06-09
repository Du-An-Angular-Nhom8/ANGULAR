import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent {
products:any = [];
  constructor (private productService:ProductService){
    this.productService.getAll().subscribe(data=>{
      this.products=data
    })
  }
  
}
