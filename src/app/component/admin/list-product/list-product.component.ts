import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: any = []
  category: any = {
    name: ""
  };
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data.data
      this.products.map((product: any) => {
        this.categoryService.getAllCat().subscribe((data: any) => {
          const cat = data.find((c: any) => c._id === product.categoryId);
          this.category = cat.name
          product.category = cat ? cat.name : '';
          return product;
        })
      })
    })
  }
}
