import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Product } from 'src/app/interfaces/product';
declare let $: any;


@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {

  cartNumber:number=0
  wishCount:number=0


  constructor(private _user:LoginService,
    private _Router:Router,
    private _OrderService:OrderService,
    private _cart:CartService,
    private _WishlistService:WishlistService,
    // private _Toastr:ToastrService
    ){}

  id:string=''
  myList:Product[]=[]
  myData:string[]=[]

  ngOnInit(): void {
    this._user.userToken.subscribe()
    this.userId()
    this._cart.numberOfItems.subscribe({
      next:(response)=>{
        this.cartNumber=response
      }
    })
    this._WishlistService.userWishCount.subscribe({
      next:(response)=>{
        this.wishCount=response
      }
    })
    // this.userWishList()
  }

  userId():void{
    this.id=this._OrderService.getDecodedAccessToken(JSON.stringify(localStorage.getItem('userToken'))).id
  }

  logOut():void{
    localStorage.removeItem('userToken')
    this._Router.navigate(['/login'])
    this._user.userToken.next('')

  }




  // userWishList():void{
  //   this._WishlistService.getWishList().subscribe({
  //     next:(response)=> {
  //       this.myList=response.data
  //       }
  //   })
  // }



  // addToCart(id:string):void{

  //   this._cart.addToCart(id).subscribe({
  //     next:(response)=>{

  //       this._cart.numberOfItems.next(response.numOfCartItems)
  //       this._Toastr.success(response.message,'Added',{
  //         closeButton:true,
  //         timeOut:4000,
  //         progressBar:true,
  //       })
  //     },
  //     error:(err)=>{
  //         this._Toastr.error(err.error,'Failed',{
  //         closeButton:true,
  //         timeOut:4000,
  //         progressBar:true,
  //       })
  //     }
  //   })

  // }




  // removeProductFromWishList(id:string):void{
  //   this._WishlistService.removeFromWishList(id).subscribe({
  //     next:(response)=>{
  //       this.myData=response.data
  //       this._WishlistService.userWishCount.next(response.data.length)
  //       this._WishlistService.userWishList.next(response.data)
  //       this.userWishList()
  //       if(response.data.length==0){
  //         this.myList=[]
  //       }
  //       this._Toastr.warning(response.message,'removed',{
  //         closeButton:true,
  //         timeOut:4000,
  //         progressBar:true,
  //       })
  //     }
  //   })
  // }



  // showWishList():void{
  //     if(!$('.layer').hasClass('.showed')){
  //       $('.layer').animate({right:"1%"},1000,function(){
  //         $('.layer').addClass('.showed')
  //       })
  //     }
  //     else{
  //     $('.layer').animate({right:"-30%"},1000,function(){
  //       $('.layer').removeClass('.showed')
  //     })
  //   }


  // }

}
