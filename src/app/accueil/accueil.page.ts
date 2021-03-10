import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  list=[
    {
      name:'Dépot',
      icone:'return-up-forward',
      url:'/depot'
    },
    {
      name:'Retrait',
      icone:'return-up-back',
      url:'/retrait'
    },
    {
      name:'Mes Transactions',
      icone:'sync',
      url:'/mes-transactions'
    },
    {
      name:'Toutes les Transactions',
      icone:'sync-circle',
      url:'/toutes-les-transactions'
    },
    {
      name:'Mes commissions',
      icone:'reorder-three-outline',
      url:'/mes-commissions'
    } ,

    {
      name:'Calculateur de Frais',
      icone:'calculator-outline',
      url:'/calculateur-frais',
      
    },
    {
      name:'Déconnexion',
      icone:'log-out-outline',
      url:''
    }
  ]
  constructor(public navCtrl:NavController) {
    
       }

  ngOnInit() {
  }

}
