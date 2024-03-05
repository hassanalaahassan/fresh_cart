import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { CartProduct } from 'src/app/interfaces/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(
    private _cartService:CartService,
    private _Toster:ToastrService
  ){}

    cartId:string=''
    countItem:number=0
    totalCartPrice:number=0
    productList:CartProduct[]=[]
    clearMessage:string=''

  ngOnInit(): void {

    this.getUserData()


  }

  getUserData():void{
    this._cartService.getUserCart().subscribe({
      next:(response)=>{
        this._cartService.numberOfItems.next(response.numOfCartItems) 
        this.countItem=response.numOfCartItems
        this.totalCartPrice=response.data.totalCartPrice
        this.productList=response.data.products
        this.cartId=response.data._id
        if(this.productList.length==0){
          this.clearMessage='Sorry but your cart is Empty'
        }

      },
      error:(err)=>{

          this.clearMessage='Sorry but your cart is Empty'
      }
    })
  }
  updateCart(id:string,count:number):void{
    this._cartService.updateMyCart(id,count).subscribe({
      next:(response)=>{
        this._cartService.numberOfItems.next(response.numOfCartItems)
        this.countItem=response.numOfCartItems
        this.totalCartPrice=response.data.totalCartPrice
        this.productList=response.data.products
        this._Toster.success('Cart Updated success','Updated',{
          closeButton:true,
          timeOut:4000,
          progressBar:true,
          positionClass:'toast-top-left'
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
  clearCart():void{
    this._cartService.clearCart().subscribe({
      next:()=>{
        this._cartService.numberOfItems.next(0)
        this.countItem=0
        this.totalCartPrice=0
        this.productList=[]
        this.clearMessage='Sorry but your cart is Empty'
      }
    })
  }
  removeProduct(id:string){
    this._cartService.removeFromCart(id).subscribe({
      next:(response)=>{
        this._cartService.numberOfItems.next(response.numOfCartItems)
        this.countItem=response.numOfCartItems
        this.totalCartPrice=response.data.totalCartPrice
        this.productList=response.data.products
        this._Toster.success('','Product removed',{
          closeButton:true,
          timeOut:4000,
          progressBar:true,
        })
        if(this.productList.length==0){
          this.clearMessage='Sorry but your cart is Empty'
        }
      }
    })
  }
}
