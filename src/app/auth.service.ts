import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private _HttpClient: HttpClient,private _Router:Router) { }
  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token:any = localStorage.getItem("userToken");
    this.currentUser = jwtDecode(token);
    console.log(this.currentUser); 
  }
  register(formData: any): Observable<any> {
    return this._HttpClient.post("signup", formData);
  }
  login(formData: any): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", formData);
   
  }
  logout() {
    this.currentUser.next(null);
    localStorage.removeItem("userToken");
    this._Router.navigate(['/login']);
  }

}
