import { Component, OnInit } from '@angular/core';
import { AllproductsService } from './../../Services/allproducts.service';
import { Product } from './../../interfaces/product';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myData:string[]=[]

  constructor(
    private _allProducts:AllproductsService,
    private _CartService:CartService,
    private _Toastr:ToastrService,
    private _wishList:WishlistService
    ){
    }



  ngOnInit(): void {

    this.getProducts()
    this.userWishList()
  }
  ProductList:Product[]=[]
  term:string=''


  userWishList():void{
    this._wishList.getWishList().subscribe({
      next:(response)=>{
        for (const myId of response.data) {
          this.myData.push(myId._id);
        }
      }
    })
  }

  getProducts():void{
    this._allProducts.getAllProduct().subscribe({
      next:(response)=>{

        this.ProductList=response.data;
      }

    })
  }
  addToCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._Toastr.success(response.message,'Added',{
          closeButton:true,
          timeOut:4000,
          progressBar:true,
        })
      },
      error:(err)=>{
      this._Toastr.error(err.error,'Failed',{
        closeButton:true,
        timeOut:4000,
        progressBar:true,
      })
    }
    })
  }
  // removeProductFromWishList(id:string):void{
  //   this._wishList.removeFromWishList(id).subscribe({
  //     next:(response)=>{
  //       this.myData=response.data
  //       this._wishList.userWishCount.next(response.data.length)
  //       this._Toastr.warning(response.message,'removed',{
  //         closeButton:true,
  //         timeOut:4000,
  //         progressBar:true,
  //       })
  //     }
  //   })
  // }
  // addProductToWishList(id:string):void{
  //   this._wishList.addToWishList(id).subscribe({
  //     next:(response)=>{
  //       this.myData=response.data
  //       this._wishList.userWishCount.next(response.data.length)
  //       this._Toastr.success(response.message,'Added',{
  //         closeButton:true,
  //         timeOut:4000,
  //         progressBar:true,
  //       })
  //     }
  //   })
  // }

  wishListProducts(id:string):void{
    if(this.myData.includes(id)){
      this._wishList.removeFromWishList(id).subscribe({
        next:(response)=>{
          this.myData=response.data
          this._wishList.userWishCount.next(response.data.length)
        }
      })
    }
    else
    {
      this._wishList.addToWishList(id).subscribe({
        next:(response)=>{
          this.myData=response.data
          this._wishList.userWishCount.next(response.data.length)
        }
      })
    }
  }
}
