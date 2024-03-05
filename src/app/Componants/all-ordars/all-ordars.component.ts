import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Order } from 'src/app/interfaces/order';



@Component({
  selector: 'app-all-ordars',
  templateUrl: './all-ordars.component.html',
  styleUrls: ['./all-ordars.component.scss']
})
export class AllOrdarsComponent {
  constructor(private _OrderService:OrderService){}


  userId:string=''
  orderList:Order[]=[]
  productList:any[]=[]


  ngOnInit(): void {
    this.decodeToken()
    this.getUserOrders(this.userId)
  }

  decodeToken():void{
    this.userId=this._OrderService.getDecodedAccessToken(JSON.stringify(localStorage.getItem('userToken'))).id
  }
  getUserOrders(id:string):void{
    this._OrderService.getOrders(id).subscribe({
      next:(response)=>{
        this.orderList=response
         for (const product of response) {
           this.productList.push(product.cartItems);
         }
         console.log(this.productList);
      }
    })
}
}

