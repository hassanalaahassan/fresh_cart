import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com'
  header={
        token:localStorage.getItem('userToken')||''
    }

  visa(data:Payment,id:string|null):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=https://hassanalaahassan.github.io/freshCart/`,
    {shippingAddress:data},
    {headers:this.header}
    )
  }
  cash(data:Payment,id:string|null):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/${id}`,
    {shippingAddress:data},
    {headers:this.header}
    )
  }
}
