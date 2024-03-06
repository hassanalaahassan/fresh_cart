import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }
  getDecodedAccessToken(token: string): any{
   return jwt_decode.jwtDecode(token)
  }

  getOrders(userId:string):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${userId}?https://fresh-cart-rfyp.vercel.app/#`)
  }
}
