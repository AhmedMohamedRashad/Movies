import { AuthService } from './../auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  loginForm=new FormGroup(
    {
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z]{1}[a-z0-9]{3,8}")]), 

    }
    )
    submitLoginForm(loginForm:FormGroup){
      // this._AuthService.login(loginForm.value).subscribe((response)=>{
        
      //   if(response.message == 'success')
      //   {
      //     localStorage.setItem("userToken",response.token);
      //     this._AuthService.saveCurrentUser();
      //     this._Router.navigate(['/home']);
      //   }
      //   else
      //   {
      //     this.error = response.message;
      //   }
      // })

      localStorage.setItem("userToken",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      this._AuthService.saveCurrentUser();
      this._Router.navigate(['/home']);
    }

  ngOnInit(): void {
  }

}
