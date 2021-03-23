import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from 'src/Entity/Client';
import { Transaction } from 'src/Entity/Transaction';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import {Storage} from '@ionic/storage';
import { PopoverController } from '@ionic/angular';
import { PopoverretraitComponent } from '../popoverretrait/popoverretrait.component';

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
    numero_cni:"",
    telephone:""
  };
  clientDepot:Client={
    nomCompletClient:"",
    numero_cni:"",
    telephone:""
  };
  transaction=
  {
    montant:0,
    clientsRetrait:Client,
    clients:Client,
    compteDepot:
    {
      id:1
    },
    compteRetrait:
    {
      id:null
    }
  };
 
  
  
  
  constructor(private service:AuthService,private storage:Storage,private popovercontroller:PopoverController) 
  {}
compte:any;  
id:any;
id1:any
helper=new JwtHelperService();

  ngOnInit( ) {


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
          console.log(response)
          if (response['hydra:member'][0]['isRetired']===false)
          {
            this.show=false;
            this.transaction=response["hydra:member"][0];
            this.clientDepot=this.transaction['clientDepot'];
            this.clientRetrait=this.transaction['clientRetrait']
            console.log(this.transaction);
          }
          else
          alert('Code Déja utilisé');
      },
      
      )
    }

    else
    {
      this.show=true
    }    
    
  }
    MakeRetrait(numCIN:string)
    {
      var  data={
        "comptesRetrait":
        {
            "id":1
        },
        
        "clientRetrait":
        {
            "numeroCni":numCIN
        }
    }
    
    this.service.retrait(data,this.transaction['id']).subscribe(
      (response:any)=>
        {
          Swal.fire({
            title: 'Retrait reussie',
            text: 'Retrait reussie',
            icon: 'success',
            
          })

          console.log(response)
        },
        (error:any)=>
        {
          Swal.fire({
            title: 'Connexion echec',
            text: 'Connexion echec',
            icon: 'error',
          })
      }
    )
    }
   

}
  


