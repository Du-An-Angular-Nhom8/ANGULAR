import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
   products:any=[]
   constructor(private productService:ProductService){
    this.productService.getNewproduct().subscribe((data:any)=>{
      this.products=data.data
    })
   }
}
