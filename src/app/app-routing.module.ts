import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';
import { ListCategoryComponent } from './component/admin/list-category/list-category.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { ListUserComponent } from './component/admin/list-user/list-user.component';
import { BaseClientComponent } from './layout/base-client/base-client.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { EditCategoriesComponent } from './component/admin/edit-categories/edit-categories.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { ProductCatComponent } from './component/page/product-cat/product-cat.component';
import { AuthGuardService } from './prive-router.module';
import { ProductDetailComponent } from './component/page/product-detail/product-detail.component';
import { BillProductComponent } from './component/page/bill-product/bill-product.component';
import { AddToCartComponent } from './component/page/add-to-cart/add-to-cart.component';
import { CheckOutComponent } from './component/page/check-out/check-out.component';
import { ShopProductComponent } from './component/page/shop-product/shop-product.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent ,canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
      { path: 'dashbord', component: DashbordComponent },
      { path: 'products', component: ListProductComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/:id/edit', component: EditProductComponent },
      { path: 'category', component: ListCategoryComponent },
      { path: 'category/add', component: AddCategoriesComponent },
      { path: 'users', component: ListUserComponent },
      {path:'category/:id/edit',component: EditCategoriesComponent}
    ]
  },
  {path: '', component:BaseClientComponent ,children:[
    { path: '', component: HomePageComponent },
    { path: 'product/:id/category', component: ProductCatComponent },
    { path: 'product/:id/detail',component:ProductDetailComponent},
    { path: 'cart', component: AddToCartComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'shop', component: ShopProductComponent },
  ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'bill', component: BillProductComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
