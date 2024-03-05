import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { CartComponent } from './Componants/cart/cart.component';
import { ProductsComponent } from './Componants/products/products.component';
import { CategoriesComponent } from './Componants/categories/categories.component';
import { BrandsComponent } from './Componants/brands/brands.component';
import { NotfoundComponent } from './Componants/notfound/notfound.component';
import { LoginComponent } from './Componants/login/login.component';
import { RegisterComponent } from './Componants/register/register.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';  ;
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { loginGuard } from './guard/login.guard';
import { DetailesComponent } from './Componants/detailes/detailes.component';
import { PorOfCategoryComponent } from './Componants/categories/por-of-category/por-of-category.component';
import { PaymentsComponent } from './Componants/payments/payments.component';
import { AllOrdarsComponent } from './Componants/all-ordars/all-ordars.component';
import { ForgetPasswordComponent } from './Componants/forget-password/forget-password.component';
import { ResetCodeComponent } from './Componants/reset-code/reset-code.component';
import { NewPasswordComponent } from './Componants/new-password/new-password.component';
import { WishListComponent } from './Componants/wish-list/wish-list.component';

const routes: Routes = [
  {path:'',canActivate:[loginGuard],component:BlankLayoutComponent,children:[
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'cart',component:CartComponent,title:'Cart'},
  {path:'products',component:ProductsComponent,title:'Products'},
  {path:'categories',component:CategoriesComponent,title:'Categories'},
  {path:'prodsOfCategory/:categ_id',component:PorOfCategoryComponent },
  {path:'brands',component:BrandsComponent,title:'Brands'},
  {path:'payments/:id',component:PaymentsComponent,title:'Payments'},
  {path:'allorders',component:AllOrdarsComponent},
  {path:'detailes/:_id',component:DetailesComponent},
  {path:'Wish-List',component:WishListComponent}
  ]},
  {path:'',component:AuthLayoutComponent,children:[
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'register',component:RegisterComponent,title:'Register'},
  {path:'forget-password',component:ForgetPasswordComponent,title:'Reset Password'},
  {path:'reset-code',component:ResetCodeComponent,title:'code'},
  {path:'new_password',component:NewPasswordComponent,title:'New Password'}
  ]},
  {path:'**',component:NotfoundComponent,title:'Error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
