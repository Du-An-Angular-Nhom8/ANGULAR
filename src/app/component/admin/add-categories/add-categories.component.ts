import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent {
  category: ICategory= {
    name: "",
    
  }
  constructor(private categoryService: CategoryService, private route:Router) {

  }
  HandleAdd() {
    this.categoryService.addCategory(this.category).subscribe(category => {
      console.log(category);
      this.route.navigate(['/admin/category'])
      toastr.success('Thêm thành công danh mục !!')
    })
  }
}
