import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import {environment} from '../environments/environment';
import {Storage} from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private httpclient:HttpClient,private storage:Storage){


  }

  connexionUser(user: any) :Observable<any>{
    return this.httpclient.post<any>(environment.url + 'login', user);
  }

  token=""

  loggedIn() {
    this.storage.get('token').then((val)=>{
      this.token=val;
});
return !!this.token
  }

  getToken() {
    return localStorage.getItem('token')
  }

  
  logout() {
    localStorage.removeItem("token");
  }
Depot(Transaction){
  return this.httpclient.post<any>(environment.url + 'user/transactions',Transaction);
}
 

  
}
