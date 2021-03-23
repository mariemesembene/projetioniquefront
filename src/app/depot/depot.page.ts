import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { Client } from 'src/Entity/Client';
import { Transaction } from 'src/Entity/Transaction';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { PopoverComponent } from '../popover/popover.component';




@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
hide=false;
mon:any
ClientDepot:FormGroup
montant:FormGroup
ClientRetrait:FormGroup;
frais:any;
total:any

  constructor(private fb:FormBuilder,private popovercontroller:PopoverController  , private service:AuthService) { }

  ngOnInit() {
    this.ClientDepot=this.fb.group(
      {
            nomCompletClient:['', Validators.required],
            numeroCni:['', Validators.required],
            telephone:['', Validators.required],
             
        })

        this.ClientRetrait=this.fb.group(
          {
                nomCompletClient:['', Validators.required],
                telephone:['', Validators.required],
                
          })
          this.montant=this.fb.group(
            {
              montant:['', Validators.required],
            }
          )
          

}

  ShowAndHide(data:any)
  {
    this.hide=data==1?false:true;   
  }

 
  
    async  eventpopover(){
        const modal = await this.popovercontroller.create({
          component: PopoverComponent,
          componentProps: {
          
            'clientdepot':this.ClientDepot.value,
            'clientretrait':this.ClientRetrait.value,
            'montant':this.montant.value
            
          },
          cssClass:"mainAlert"
        });
        modal.style.cssText = '--min-width: 300px; --max-width: 400px;  --height:500px;'
        return await modal.present();
      }
      calculermontant(){
      
       
       
     
        this.service.getmontant(+this.mon).subscribe( 
         

          response=>{
                this.frais= response;
                this.total= +this.mon + (+this.frais);
          }
          )
      }
    
  }