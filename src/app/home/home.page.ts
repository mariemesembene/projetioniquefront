import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: AuthService, private router: Router, private storage:Storage){}

  registerUserData = {
    email: '',
    password: ''
  };
  registerUser() {

    this.auth.connexionUser(this.registerUserData)
    
      .subscribe(
        res => {
          console.log(res);
          this.storage.set('token',res['token'])
        this.storage.get('token').then((val)=>
        {
          console.log(val);
        })
        },

       
      );
  }

}
