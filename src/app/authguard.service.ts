import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import{ AuthService } from './auth.service';
import {Storage} from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router,private storage:Storage){}
  canActivate(): boolean{
    if (this.auth.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['home'] )
      return false;
    }
    const token=this.storage.get('token');
    return (!!token)
  }
  
}
