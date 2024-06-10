import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-por-of-category',
  templateUrl: './por-of-category.component.html',
  styleUrls: ['./por-of-category.component.scss']
})
export class PorOfCategoryComponent implements OnInit {
  myData:string[]=[]
  constructor(
    private _ActiveLink:ActivatedRoute,
    private _category:CategoriesService,
    private _CartService:CartService,
    private _Toster:ToastrService,
    private _wishList:WishlistService
    ){}


  categId:string|null=''
  ProductList:Product[]=[]
  ngOnInit(): void {
    this.getIdCategory()
    this.getProducts(this.categId)
    this.userWishList()

  }
  userWishList():void{
    this._wishList.getWishList().subscribe({
      next:(response)=>{
        for (const myId of response.data) {
          this.myData.push(myId._id);
        }
      }
    })
  }
  getIdCategory():void{
    this._ActiveLink.paramMap.subscribe(
      {
        next:(param)=>{
          this.categId=param.get('categ_id')
        }
      }
    )
  }
  getProducts(id:string|null):void{
    this._category.getProductsOfCategory(id).subscribe(
      {
        next:(response)=>{
          this.ProductList=response.data
        }
      }
    )
  }
  addToCart(id:string):void{
    this._CartService.addToCart(id).subscribe(
      {
        next:(response)=>{

          this._CartService.numberOfItems.next(response.numOfCartItems)
          this._Toster.success(response.message,'Added',{
            closeButton:true,
            timeOut:4000,
            progressBar:true,
          })
        }
  })
  }
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
