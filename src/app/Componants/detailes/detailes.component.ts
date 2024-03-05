import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { Product } from 'src/app/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit {
constructor(
  private _ActivatedRoute:ActivatedRoute,
  private _myProduct:HomeService,
  private _cart:CartService,
  private _Toster:ToastrService
  ){
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  dragEndSpeed:1000,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  dotsSpeed:1000,
  navSpeed: 1000,
  responsive: {
    0: {
      items: 1
    }
  },
  nav: false
}
 myId:string|null=''

 myProduct:Product= {} as Product

  ngOnInit(): void {

    this.getParam()
    this.myItem()
    }


    getParam():void{
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.myId=params.get('_id')
          console.log(this.myId);

        }
      })
    }
    myItem():void{
      this._myProduct.getSpcProduct(this.myId).subscribe({
        next:(response)=>{
          this.myProduct=response.data
        }
      })
    }
    addProductToCart(id:string):void{
      this._cart.addToCart(id).subscribe({
        next:(response)=>{
          this._Toster.success(response.message,'Added',{
            closeButton:true,
            timeOut:10000,
            progressBar:true,
          })
        },
        error:(err)=>{
            this._Toster.error(err.error,'Failed',{
            closeButton:true,
            timeOut:10000,
            progressBar:true,
          })
        }
      })
    }

}


