import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  hide=false;
  ClientDepot:FormGroup
  ClientRetrait:FormGroup
    constructor(private fb:FormBuilder,private service:AuthService) { }
  
    ngOnInit() {
      this.ClientDepot=this.fb.group(
        {
              nomComplet:['', Validators.required],
              numCIN:['', Validators.required],
              telephone:['', Validators.required],
              montant:['', Validators.required]    
          })
  
          this.ClientRetrait=this.fb.group(
            {
                  nomComplet:['', Validators.required],
                  telephone:['', Validators.required],
                  
            })
  }
  
    ShowAndHide(data:any)
    {
      this.hide=data==1?false:true;   
    }
  
    Depot()
    {
      
      var data={
        "compteDepot":
      {
          "id":1
      },
      "clientDepot":
      {
          "nomCompletClient":this.ClientDepot.get('nomComplet').value,
          "numeroCni":this.ClientDepot.get('numCIN').value,
          "telephone":this.ClientDepot.get('telephone').value
      },
      "clientRetrait":
      {
          "nomCompletClient":this.ClientDepot.get('nomComplet').value,
          "telephone":this.ClientDepot.get('telephone').value
      },
      "montant":Number(this.ClientDepot.get('montant').value)
      }
      console.log(data);
      this.service.Depot(data).subscribe(
        (response:any)=>
        {
          Swal.fire({
            title: 'Connexion reussie',
            text: 'Connexion reussie',
            icon: 'success',
            
          })
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
