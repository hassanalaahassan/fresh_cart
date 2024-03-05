import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {

  constructor(private _LoginService:LoginService,private _Router:Router){}


  reset:FormGroup=new FormGroup({
    email:new FormControl('',[RxwebValidators.email(),RxwebValidators.required()]),
    newPassword:new FormControl('',[RxwebValidators.pattern({expression:{password:/^\w{6,}$/}}),RxwebValidators.required()]),
  })
  handelReset():void{
    this._LoginService.newPassword(this.reset.value).subscribe({
      next:(response)=>{
        localStorage.setItem('userToken',response.token)
        this._LoginService.setUSerToken()
        this._Router.navigate(['/home'])
      }
    })

  }

}
