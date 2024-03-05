import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(private _methods:PaymentService,private _ActivatedRoute:ActivatedRoute){}

  paymentForm:FormGroup=new FormGroup({
    detailes:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
    city:new FormControl('',[Validators.required])
  })

  cartId:string|null=''
  isVisa:boolean=false;
  isCash:boolean=false;



  ngOnInit(): void {
      this.myId()
  }



  myId():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(response)=>{
        this.cartId=response.get('id')
      }
    })
  }

  paymentByVisa():void{
    this.isVisa=true;
    if(this.paymentForm.valid){
      this._methods.visa(this.paymentForm.value,this.cartId).subscribe({
        next:(response)=>{
          this.isVisa=false;
          location.href=response.session.url
        }
      })
    }
  }
  paymentByCash():void{
    this.isCash=true;
    if(this.paymentForm.valid){
      this._methods.cash(this.paymentForm.value,this.cartId).subscribe({
        next:(response)=>{
          this.isCash=false;
          console.log(response);
        }
      })
    }
  }





}
