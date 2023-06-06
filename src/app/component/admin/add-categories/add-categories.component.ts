import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import * as toastr from 'toastr';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent {
  category: ICategory= {
    name: "",
  }
  //
  categoryForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.pattern(/^\S+(?:\s\S+)*$/),Validators.minLength(8)]]
  })
  //
  get validateFormCategory(){
    return this.categoryForm.controls
  }
  //
  constructor(private categoryService: CategoryService, private route: Router, private formBuilder:FormBuilder) {}
  // HandleAdd() {
  //   this.categoryService.addCategory(this.category).subscribe(category => {
  //     console.log(category);
  //     this.route.navigate(['/admin/category'])
  //     toastr.success('Thêm thành công danh mục !!')
  //   })
  // }
  HandleAdd(){
    if(this.categoryForm.valid){
      this.category = {
        name: this.categoryForm.value.name || ""
      }
      console.log(this.category);
      this.categoryService.addCategory(this.category).subscribe(data=>{
        this.route.navigate(['/admin/category'])
        toastr.success('Thêm thành công danh mục !!')
      })

    }
  }
}
