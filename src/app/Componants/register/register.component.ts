import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { RegisterService } from 'src/app/Services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _router:Router , private _register:RegisterService){}

  errorMsg:string=''
  isLoading:boolean=false;

  registeration:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl('',[Validators.required,RxwebValidators.compare({fieldName:'password'})]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)])
  },);

  hundleForm():void{

    if(this.registeration.valid && !this.isLoading){
      this.isLoading=true
      this._register.createUser(this.registeration.value).subscribe({
        next:(response)=>{
          this.isLoading=false
          this._router.navigate(['login'])
        }
        ,
        error:(err)=>{
          this.errorMsg=err.error.message
          this.isLoading=false
        }
      })

    }
  }



}
