import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss']
})
export class ResetCodeComponent {
  constructor(private _LoginService:LoginService,private _Router:Router){}
  code:FormGroup=new FormGroup({
    resetCode:new FormControl('',[Validators.required])
  })
  handelcode():void{

     if(this.code.valid){
       this._LoginService.varifyCode(this.code.value.resetCode).subscribe({
         next:(response)=>{
           console.log(response);
           if(response.status=="Success"){
            this._Router.navigate(['/new_password'])
           }
         }
       })
     }

  }

}
