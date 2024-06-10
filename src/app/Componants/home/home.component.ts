import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { HomeService } from 'src/app/Services/home.service';
import { Product } from 'src/app/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    myData:string[]=[]

    term:string=''

  constructor(
    private _homeProd:HomeService,
    private _cart:CartService,
    private _Toster:ToastrService,
    private _wishList:WishlistService
    ){
  }
  allProducts: Product[] = []

  ngOnInit(): void {
    this.homeProducts()
    this.UserWishList()

  }

  homeProducts():void{
    this._homeProd.getAllProducts().subscribe({
      next:(response)=>{
        this.allProducts=response.data;
      }
    })


  }
  addProductToCart(id:string):void{
    this._cart.addToCart(id).subscribe({
      next:(response)=>{
        this._cart.numberOfItems.next(response.numOfCartItems)
        this._Toster.success(response.message,'Added',{
          closeButton:true,
          timeOut:4000,
          progressBar:true,
        })
      },
      error:(err)=>{
          this._Toster.error(err.error,'Failed',{
          closeButton:true,
          timeOut:4000,
          progressBar:true,
        })
      }
    })
  }

  UserWishList():void{
    this._wishList.userWishList.subscribe({
      next:(response)=>{
        for (const myId of response) {
          this.myData.push(myId._id);
        }
      }
    })
  }


  wishListProducts(id:string):void{
    if(this.myData.includes(id)){
      this._wishList.removeFromWishList(id).subscribe({
        next:(response)=>{
          this.myData=response.data
          this._wishList.userWishCount.next(response.data.length)
          this._Toster.warning(response.message,'removed',{
            closeButton:true,
            timeOut:4000,
            progressBar:true,
          })
        }
      })
    }
    else
    {
      this._wishList.addToWishList(id).subscribe({
        next:(response)=>{
          this.myData=response.data
          this._wishList.userWishCount.next(response.data.length)
          this._Toster.success(response.message,'Added',{
            closeButton:true,
            timeOut:4000,
            progressBar:true,
          })
        }
      })
    }
  }







}
