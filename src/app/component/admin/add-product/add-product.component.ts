import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
// import * as toastr from 'toastr';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: any = {
    name: "",
    price: 0,
    img: "",
    desc: "",
    categoryId: ""
  }
  categories: any = []
  uploading: boolean = false;

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService, private http: HttpClient, private toastr: ToastrService) {
    this.categoryService.getAllCat().subscribe(data => {
      this.categories = data
    })
  }
  HandleAdd() {
    console.log(this.product)
    this.productService.AddPro(this.product).subscribe(data => {
     
      this.toastr.success('Bạn đã thêm sản phẩm thành công !')
      setTimeout(() => {
        this.router.navigate(['/admin/products'])
      },1000)
    })
  }
  HandleUpload(fileInput: any) {
    this.uploading = true;
    const file: File = fileInput.files[0];
    console.log(file)
    const cloud_name = 'dw6wgytc3';
    const preset_name = 'demo_upload';
    const folder_name = 'NODEJS';
    const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const formdata = new FormData();
    formdata.append('upload_preset', preset_name)
    formdata.append('folder', folder_name)
    formdata.append('file', file)
    this.http.post(api, formdata)
      .subscribe((data: any) => {
        const imageUrl = data.secure_url;
        console.log(imageUrl) // In đường dẫn URL của ảnh đã tải lên từ Cloudinary
        // Gán giá trị vào thuộc tính product.img
        this.product.img = imageUrl;
        // Tại đây, bạn có thể sử dụng đường dẫn URL để thực hiện các thao tác khác hoặc lưu vào biến trong ứng dụng của bạn
        this.uploading = false; // Cập nhật biến cờ khi hoàn thành quá trình tải lên
        alert('thanh cong')
        // console.log(this.image)
      },
        (error: any) => {
          console.error('Error:', error);
        });
  }
}
