import { AuthService } from './../auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error:string = '';
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  registerForm = new FormGroup(
    {
      first_name:new FormControl(null,
        [Validators.required,Validators.minLength(3),Validators.maxLength(16)]
        ),
      last_name:new FormControl(null,
        [Validators.required,Validators.minLength(3),Validators.maxLength(16)]
        ),
      age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(80)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z]{1}[a-z0-9]{3,8}")]),
    }
  )
  submitRegisterForm(registerForm:FormGroup){
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        this._Router.navigate(['/login'])
      }
      else
      {
        this.error = response.errors.email.message;
      }
    })
    
  }
  

  ngOnInit(): void {
  }

}
