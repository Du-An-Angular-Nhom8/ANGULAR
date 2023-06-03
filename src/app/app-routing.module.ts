import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent,children:[
    {path: '', redirectTo: 'dashbord', pathMatch:'full'},
    {path: 'dashbord', component:DashbordComponent},
      { path: 'products', component: ListProductComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
