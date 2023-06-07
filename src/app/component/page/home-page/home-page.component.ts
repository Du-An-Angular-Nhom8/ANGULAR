import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
   products:any=[]
   producttrandy:any=[]
   categories:any=[]
   constructor(private productService:ProductService, private categoryService:CategoryService){
    this.productService.getNewproduct().subscribe((data:any)=>{
      this.products=data.data
    })
    this.productService.getTrandy().subscribe((data:any)=>{
      this.producttrandy=data.data
    })
    this.categoryService.getAllCat().subscribe(data=>{
      this.categories=data
      console.log(data);
      
    })
   }
}
