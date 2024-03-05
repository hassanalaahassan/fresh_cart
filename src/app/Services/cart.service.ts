import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string='https://route-ecommerce.onrender.com'
  header={
    token:localStorage.getItem('userToken')||''
  }

  numberOfItems:BehaviorSubject<number>= new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) {

    this.getUserCart().subscribe({
      next:(response)=>{
        this.numberOfItems.next(response.numOfCartItems)

      }
    })

  }


  getUserCart():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.header
    })
  }
  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,
    {productId:id},
    {headers:this.header}
    )
  }
  removeFromCart(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`,
    {headers:this.header})
  }

  updateMyCart(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,
    {count:count},
    {headers:this.header}

    )
  }
  clearCart():Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/`,
    {headers:this.header})
  }
}
