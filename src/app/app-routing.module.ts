import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component : ProductComponent},
  {path:'product-add-1',component : ProductAddForms1Component},
  {path:'product-add-2',component :ProductAddForm2Component},
  {path:' ',redirectTo : 'products', pathMatch : 'full'},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
