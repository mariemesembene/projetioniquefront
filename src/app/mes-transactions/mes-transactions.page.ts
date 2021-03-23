import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mes-transactions',
  templateUrl: './mes-transactions.page.html',
  styleUrls: ['./mes-transactions.page.scss'],
})
export class MesTransactionsPage implements OnInit {

  constructor(private service: AuthService) { }
  user: any;
  tab: any = [];
  id: number;

  ngOnInit() {
    this.getIdUser();
    // console.log(this.id);

  }
  getIdUser() {
    this.service.getuser().subscribe(
      response => {
        this.id = response['id'];
        this.getliste(this.id);
        // console.log(typeof(response['id']));
        // console.log(this.id);
        return this.id;
      }
    )
  }
  getliste(id) {
    let valeurs;
    valeurs = this.service.fusion(id).subscribe(
      // res => console.log(res[0])
      res => {
        let val = res[0];
        let val1 = res[1];
        val.data.subscribe(
          depot => {
            // console.log(depot);
            for (let i in depot) {
              // console.log(depot[i]);
              let r = {};
              r['type'] = 'depot',
              r['date'] = depot[i]['date_depot']
              r['montant'] = depot[i]['montant']
              r['frais'] = depot[i]['frais']
              r['email'] = depot[i]['user']['email']

              // console.log(r);
              this.tab.push(r);
              this.tab = [...this.tab];
            }
          }
        )
        val1.data.subscribe(
          depot => {
            // console.log(depot);
            for (let i in depot) {
              // console.log(depot[i]);
              let r = {};
              r['type'] = 'retrait',
              r['date'] = depot[i]['date_retrait'];
              r['montant'] = depot[i]['montant']
              r['frais'] = depot[i]['frais']
              r['email'] = depot[i]['userRetrait']['email']

              // console.log(r);
              this.tab.push(r);
              this.tab = [...this.tab];
            }
          }
        )
        // console.log(this.tab);
      }
    )
    // console.log(this.tab);
  }




}
