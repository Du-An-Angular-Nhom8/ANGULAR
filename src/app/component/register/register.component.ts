import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import { FormBuilder } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: any = {
    name: "",
    email: "",
    password: "",
    confirmpassword:"",
    image: "",
  }
  userForm = this.formBuilder.group({
    name:[''],
    email:[''],
    password:[''],
    confirmpassword:[''],
    image:['']
  })
  get validateForm(){
    return this.userForm.controls
  }
  
  uploading: any = []
  constructor(private http: HttpClient, private signupService: AuthService, private router: Router,private formBuilder:FormBuilder) { }
  HandleSignup() {
    console.log(this.user)
    this.signupService.Signup(this.user).subscribe(data=>{

      this.router.navigate(['/login'])
      toastr.success('Bạn đăng ký thành công. Hãy đăng nhập !')
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
        this.user.image = imageUrl;
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

