import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-calculateur-frais',
  templateUrl: './calculateur-frais.page.html',
  styleUrls: ['./calculateur-frais.page.scss'],
})
export class CalculateurFraisPage implements OnInit {

  constructor(private popovercontroller:PopoverController,private service:AuthService) { }
    mon:any
    frais:any
    total:any
  ngOnInit() {
   
  }
  
  calculermontant(){
      
   
    this.service.getmontant(+this.mon).subscribe( 
    

      response=>{
            this.frais= response;
            this.total= +this.mon + (+this.frais);
      }
      )
  }
  async  eventpopover(){
    const modal = await this.popovercontroller.create({
      component: CalculatorComponent,
      componentProps: {
        'montant':this.mon,
        'frais':this.frais
            
        
      },
      cssClass:"mainAlert"
    });
    modal.style.cssText = '--min-width: 200px; --max-width: 400px;  --height:100px;'
    return await modal.present();
  }
 
}
