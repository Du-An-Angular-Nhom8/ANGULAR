import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';
import { ListCategoryComponent } from './component/admin/list-category/list-category.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { ListUserComponent } from './component/admin/list-user/list-user.component';
import { BaseClientComponent } from './layout/base-client/base-client.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
      { path: 'dashbord', component: DashbordComponent },
      { path: 'products', component: ListProductComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/:id/edit', component: EditProductComponent },
      { path: 'category', component: ListCategoryComponent },
      { path: 'category/add', component: AddCategoriesComponent },
      { path: 'users', component: ListUserComponent },
    ]
  },
  {path: '', component:BaseClientComponent ,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
