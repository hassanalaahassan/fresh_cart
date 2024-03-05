import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken')){
      this.userToken.next(JSON.stringify(localStorage.getItem('userToken')))
    }
  }

  userToken:BehaviorSubject <string> = new BehaviorSubject('')

  setUSerToken():void{
    let token:string = JSON.stringify(localStorage.getItem('userToken'))
    this.userToken.next(token)
  }

  varifyLogin(account:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',account)
   }
   resetUserPassword(data:string):Observable<any>
   {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email:data})
   }
   varifyCode(code:string):Observable<any>
   {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{resetCode:code})
   }
   newPassword(data:object):Observable<any>
   {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,data)
   }
}
