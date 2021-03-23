
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import {environment} from '../environments/environment';
import {Storage} from '@ionic/storage';
import { Transaction } from 'src/Entity/Transaction';


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

 

  
  
Depot(transactions:Transaction):Observable<Transaction>{
  return this.httpclient.post<Transaction>(environment.url + 'user/transactions', transactions);
}
getransaction(Transaction:string){
    return this.httpclient.get(environment.url + 'user/transactions/code?code_transaction=' + Transaction);
  }
  retrait(transaction,id){
    return this.httpclient.put(environment.url + 'user/transactions/'+id, transaction);

  }
 
getroles():Observable<string>{
  return this.httpclient.get<string>(environment.url + 'user/roles' );
}
getmontant(montant:number){
  return this.httpclient.get(environment.url + 'user/transactions/montant?montant='+ montant );
}
getcompte(compte:number,id,id1){
  return this.httpclient.get(environment.url + 'user/agence/'+id+'/compte/'+id1/+ compte);
}

fusion(id){
  return of([
  
   {type:"depot" ,data:this.httpclient.get(environment.url +'user/'+id+'/depotTransactions')},
   {type:"retrait" ,data:this.httpclient.get(environment.url +'user/'+id+'/retraitTransactions')},

  ]);
  
}

getDepot(id){
  return this.httpclient.get(environment.url +'user/'+id+'/depotTransactions')
}
getuser(){
  return this.httpclient.get(environment.url + 'user');
}
   }