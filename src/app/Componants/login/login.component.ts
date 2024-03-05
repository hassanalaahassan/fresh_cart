import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  isLoading:boolean=false

  constructor(private _Login:LoginService , private _router:Router){}



  login:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.pattern(/^\w{6,}$/),Validators.required])
  })

  handelLogin():void{


    if(this.login.valid){
      this.isLoading=true
    this._Login.varifyLogin(this.login.value).subscribe({
      next:(response)=>{
        localStorage.setItem('userToken',response.token)
        this.isLoading=false
        this._Login.setUSerToken()
        this._router.navigate(['/home'])

      },
      error:(err)=>{
        this.isLoading=false
      }
    })
  }

  }

}
