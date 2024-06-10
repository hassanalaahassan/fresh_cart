import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(
    private _WishlistService:WishlistService,
    private _CartService:CartService,
    private _Toastr:ToastrService
  ){}

  ProductList:Product[]=[]
  myData:string[]=[]
  errMessage:string=''

    ngOnInit(): void {
      this.userWishList()
    }

    userWishList():void{

      this._WishlistService.getWishList().subscribe({
        next:(response)=> {
          this.ProductList=response.data
          if(response.data.length==0){
            this.errMessage ='Sorry but yor Wish List is Empty'
            console.log(this.errMessage);

          }
          else{
            for (const myId of response.data) {
              this.myData.push(myId._id);
            }
          }
        }
      })
    }
    addToCart(id:string):void{

      this._CartService.addToCart(id).subscribe({
        next:(response)=>{

          this._CartService.numberOfItems.next(response.numOfCartItems)
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
    removeProductFromWishList(id:string):void{
      this._WishlistService.removeFromWishList(id).subscribe({
        next:(response)=>{
          this.myData=response.data
          this._WishlistService.userWishCount.next(response.data.length)
          this.update(this.ProductList)
          if(response.data.length==0){
            this.ProductList=[]
            this.errMessage='Sorry but yor Wish List is Empty'
          }
          this._Toastr.warning(response.message,'removed',{
            closeButton:true,
            timeOut:4000,
            progressBar:true,
          })
        }
      })
    }

    update(arr:Product[]):void{
      this.ProductList=[]
        for (const Product of arr) {

          if(this.myData.includes(Product._id)){
            this.ProductList.push(Product)
          }

        }
    }
}
