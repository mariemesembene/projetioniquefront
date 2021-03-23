import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
hider=false;
list:any[]
id:any
id1:any
 compte:any
  constructor(public navCtrl:NavController,private service:AuthService) {
    
       }

  ngOnInit() {
  
    this.service.getroles().subscribe(
      (response)=>{
       
       
      if(response[0]!="ROLE_admin_system"){

        this.hider=true;
         console.log(this.hider)

      }
      this.list=[
        {
          name:'Dépot',
          icone:'return-up-forward',
          url:'/depot',
          hide:false
        },
        {
          name:'Retrait',
          icone:'return-up-back',
          url:'/retrait',
          hide:false
        },
        {
          name:'Mes Transactions',
          icone:'sync',
          url:'/mes-transactions',
          hide:false
        },
        {
          name:'Toutes les Transactions',
          icone:'sync-circle',
          url:'/toutes-les-transactions',
          hide:this.hider
    
    
        },
        {
          name:'Mes commissions',
          icone:'reorder-three-outline',
          url:'/mes-commissions',
          hide:this.hider
        },
        {
          name:'Calculateur de Frais',
          icone:'calculator-outline',
          url:'/calculateur-frais',
          hide:false
          
        },
        {
          name:'Déconnexion',
          icone:'log-out-outline',
          url:'',
          hide:false
        }
      ]
      }
      
    )
    
   
  }
  calculermontant(){
      
   
    this.service.getcompte(this.compte,this.id,this.id1).subscribe( 
    

      response=>{
        this.compte= response;
        console.log(this.compte)
       
  }
      )
  }
 
}
