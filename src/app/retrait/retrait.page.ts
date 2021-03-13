import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/Entity/Client';
import { Transaction } from 'src/Entity/Transaction';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  hide=false;
  code="";
  show=true;
  clientRetrait:Client={
    nomCompletClient:"",
    numeroCni:"",
    telephone:""
  };
  clientDepot:Client={
    nomCompletClient:"",
    numeroCni:"",
    telephone:""
  };
  transaction:Transaction=
  {
    montant:0,
    clientsRetrait:this.clientRetrait,
    clients:this.clientDepot,
    compteDepot:
    {
      id:1
    },
    compteRetrait:
    {
      id:null
    }
  };
 
    constructor(private fb:FormBuilder,private service:AuthService) { }
  
    ngOnInit() {
      
     
  }
  
  
    ShowAndHide(data:any)
    {
      this.hide=data==1?false:true;   
    }
  
    GetTransaction()
    {
      if (this.code.length==11)
      {
        
        this.service.getransaction(this.code).subscribe(
          (response:any)=>
          {
            console.log(response["hydra:member"][0])
            if (response["hydra:member"][0]['isRetired']==false)
            {
              console.log(response["hydra:member"][0])
              this.show=false;
              console.log( this.show)
              this.transaction=response["hydra:member"][0];
              this.clientDepot=this.transaction['clientDepot'];
              this.clientRetrait=this.transaction['clientRetrait']
              console.log(this.transaction);
            }
        
   }
        
  
        
        )
      }
  
      else
      {
        this.show=true
      }    
      
    }
    
  

}
