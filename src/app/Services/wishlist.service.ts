import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  header={
    token:localStorage.getItem('userToken')||''
  }

  userWishCount:BehaviorSubject<any>= new BehaviorSubject('')
  userWishList:BehaviorSubject<Product[]>= new BehaviorSubject([] as Product[])

  constructor(private _HttpClient:HttpClient) {

    this.getWishList().subscribe({
      next:(response)=>{
        this.userWishCount.next(response.count)
        this.userWishList.next(response.data)
      }
    })

   }

  addToWishList(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},
    {headers:this.header})
  }
  removeFromWishList(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {headers:this.header})
  }
  getWishList():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {headers:this.header})
  }
}
