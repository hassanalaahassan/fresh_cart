import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componants/login/login.component';
import { RegisterComponent } from './Componants/register/register.component';
import { NavbarBlankComponent } from './Componants/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './Componants/navbar-auth/navbar-auth.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import{ HTTP_INTERCEPTORS, HttpClientModule } from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './Componants/notfound/notfound.component';
import{BrowserAnimationsModule}from"@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './Componants/home/slider/slider.component';
import { SearchPipe } from './Pipe/search.pipe';
import { SplitProPipe } from './Pipe/split-pro.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FilterListPipe } from './Pipe/filter-list.pipe';
import { LoaderComponent } from './Componants/loader/loader.component';
import { HttpInterInterceptor } from './http-inter.interceptor';
import { ForgetPasswordComponent } from './Componants/forget-password/forget-password.component';
import { ResetCodeComponent } from './Componants/reset-code/reset-code.component';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { NewPasswordComponent } from './Componants/new-password/new-password.component';
import { FavPipe } from './Pipe/fav.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrandsComponent } from './Componants/brands/brands.component';
import { WishListComponent } from './Componants/wish-list/wish-list.component';
import { PorOfCategoryComponent } from './Componants/categories/por-of-category/por-of-category.component';
import { PaymentsComponent } from './Componants/payments/payments.component';
import { HomeComponent } from './Componants/home/home.component';
import { CartComponent } from './Componants/cart/cart.component';
import { ProductsComponent } from './Componants/products/products.component';
import { CategoriesComponent } from './Componants/categories/categories.component';
import { AllOrdarsComponent } from './Componants/all-ordars/all-ordars.component';
import { DetailesComponent } from './Componants/detailes/detailes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NotfoundComponent,
    LoaderComponent,
    ForgetPasswordComponent,
    ResetCodeComponent,
    NewPasswordComponent,
    FavPipe,
    BrandsComponent,
    WishListComponent,
    PorOfCategoryComponent,
    PaymentsComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    AllOrdarsComponent,
    DetailesComponent,
    SliderComponent,
    SearchPipe,
    SplitProPipe,
    FilterListPipe,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    RxReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
