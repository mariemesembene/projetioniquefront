import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Transaction } from 'src/Entity/Transaction';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
 currentPopover= null
 ClientDepot:FormGroup
transaction:any
ClientRetrait:FormGroup
  constructor(private fb:FormBuilder ,private popovercontroller:PopoverController ,  private modal:ModalController, private service:AuthService, private router:Router) { }

 
  ngOnInit() {
   
          
          

}
          
  
@Input()type
@Input ()clientdepot
@Input()clientretrait
@Input()montant


Depot()
  {
    
    var data:Transaction={
      "compteDepot":
    {
        "id":1
    },
    "compteRetrait":
    {
        "id":null
    },
    "clientDepot":this.clientdepot,
    
    "clientRetrait":this.clientretrait,
   
    "montant": Number (this.montant['montant'])
    }
   
    this.service.Depot(data).subscribe(
      (response)=>{
        console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            this.transaction=response
      }

    )
      }
      async  eventpopover(){
        const modal = await this.popovercontroller.create({
          component: ResumeComponent,
          componentProps: {
            'transaction':this.transaction,
            'clientretrait':this.clientretrait,
            'montant':this.montant
            
          },
          cssClass:"mainAlert"
        });
        modal.style.cssText = '--min-width: 200px; --max-width: 400px;  --height:100px;'
        return await modal.present();
      }
      dismiss() {
        this.modal.dismiss();
       
     }

}
