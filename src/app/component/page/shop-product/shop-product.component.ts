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
  password: any = ''
  user: any = {}
  showPasswordInput: boolean = true;
  datalogin: any = {
    email: '',
    password: '',
  }
  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private authService: AuthService, private userService: UserService) {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })
    // const idUser = user && user.user ? user.user.cart : undefined;


  }
  submitPassword() {
    // Xử lý mật khẩu
    console.log("Password:", this.password);
    // Đặt lại giá trị của biến password
    this.password = "";
  }
  HandleAddToCart(id: any) {

    console.log(this.password);

    const user = JSON.parse(localStorage.getItem('user')!);
    const accessToken = user ? user.accessToken : undefined;
    const carrt = user && user.user ? user.user.cart : undefined
    this.dataCart._id = id
    if (!carrt) {
      // alert("okok")
      // ... các thao tác khác

      const pass: any = prompt('Hãy nhập mật khẩu để tạo giỏ hàng')
      if (pass !== null) {
        console.log(pass); // In ra giá trị người dùng đã nhập khi nhấn OK
        this.password = pass
        // Thực hiện xử lý với giá trị pass ở đây
        console.log(user);
        this.user = user
        const idUser = user && user.user ? user.user._id : undefined;
        // console.log(id);
        
        this.userService.getOneUser(idUser).subscribe((data: any) => {
          this.datalogin.email = data.email
          this.datalogin.password = this.password

          // localStorage.removeItem('user')
          // localStorage.setItem('user', JSON.stringify(data))
          console.log(this.datalogin);
          this.cartService.AddToCart(this.dataCart).subscribe(data => {
            console.log('addtocart thanh cong');
          })
          this.authService.Signin(this.datalogin).subscribe(data => {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data))
          })
          return
        })
        return
      } else {
        console.log('Bạn đã bỏ qua nhập mật khẩu'); // In ra khi người dùng nhấn Cancel
        return
        // Thực hiện xử lý khi người dùng bỏ qua nhập mật khẩu ở đây
      }
      this.showPasswordInput = false;
    }
    this.cartService.AddToCart(this.dataCart).subscribe(data => {
      console.log('addtocart thanh cong');
      const ok = confirm('Bạn đã thêm sản phẩm vào giỏ hàng. Hãy kiểm tra !')
      if (ok == true) {
        this.router.navigate(['/cart'])
      }
    })
  }
}
