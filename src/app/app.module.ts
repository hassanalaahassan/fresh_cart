import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componants/home/home.component';
import { ProductsComponent } from './Componants/products/products.component';
import { CartComponent } from './Componants/cart/cart.component';
import { LoginComponent } from './Componants/login/login.component';
import { RegisterComponent } from './Componants/register/register.component';
import { DetailesComponent } from './Componants/detailes/detailes.component';
import { NavbarBlankComponent } from './Componants/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './Componants/navbar-auth/navbar-auth.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { CategoriesComponent } from './Componants/categories/categories.component';
import { BrandsComponent } from './Componants/brands/brands.component';
import{ HTTP_INTERCEPTORS, HttpClientModule } from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './Componants/notfound/notfound.component';
import{BrowserAnimationsModule}from"@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './Componants/home/slider/slider.component';
import { SearchPipe } from './Pipe/search.pipe';
import { SplitProPipe } from './Pipe/split-pro.pipe';
import { PorOfCategoryComponent } from './Componants/categories/por-of-category/por-of-category.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './Componants/payments/payments.component';
import { AllOrdarsComponent } from './Componants/all-ordars/all-ordars.component';
import { FilterListPipe } from './Pipe/filter-list.pipe';
import { LoaderComponent } from './Componants/loader/loader.component';
import { HttpInterInterceptor } from './http-inter.interceptor';
import { ForgetPasswordComponent } from './Componants/forget-password/forget-password.component';
import { ResetCodeComponent } from './Componants/reset-code/reset-code.component';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { NewPasswordComponent } from './Componants/new-password/new-password.component';
import { FavPipe } from './Pipe/fav.pipe';
import { WishListComponent } from './Componants/wish-list/wish-list.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    DetailesComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CategoriesComponent,
    BrandsComponent,
    NotfoundComponent,
    SliderComponent,
    SearchPipe,
    SplitProPipe,
    PorOfCategoryComponent,
    PaymentsComponent,
    AllOrdarsComponent,
    FilterListPipe,
    LoaderComponent,
    ForgetPasswordComponent,
    ResetCodeComponent,
    NewPasswordComponent,
    FavPipe,
    WishListComponent,
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
