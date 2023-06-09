import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import * as toastr from 'toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})

export class ShopProductComponent {
  products: any = [];
  dataCart: any = {
    _id: ''
  }
  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private authService: AuthService, private userService: UserService) {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })
  }
  HandleAddToCart(id: any) {
    
    const user = JSON.parse(localStorage.getItem('user')!);
    const accessToken = user ? user.accessToken : undefined;
    // console.log(user);

    const idUser = user && user.user ? user.user._id : undefined;
    // console.log(id);
    this.dataCart._id = id
    this.cartService.AddToCart(this.dataCart).subscribe(data => {
      console.log('addtocart thanh cong');
      const ok = confirm('Bạn đã thêm sản phẩm vào giỏ hàng. Hãy kiểm tra !')
      if (ok == true) {
        this.router.navigate(['/cart'])
      }
      if(!user.user.cart){
        this.userService.getOneUser(idUser).subscribe(data => {
          console.log(data);
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(data))
        })
      }
      
    });


  }
}
