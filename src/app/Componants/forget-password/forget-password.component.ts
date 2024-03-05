import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _LoginService:LoginService , private _Router:Router){}



  data:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required])
  })

  hundelReset():void{
    if(this.data.valid){
      // console.log(this.data.value.email);
      this._LoginService.resetUserPassword(this.data.value.email).subscribe({
        next:(response)=>{
          if(response.statusMsg =='success'){
            this._Router.navigate(['/reset-code'])


          }
        }
      })
    }
  }


}
