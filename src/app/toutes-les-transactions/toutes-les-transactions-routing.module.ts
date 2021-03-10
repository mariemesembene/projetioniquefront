import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToutesLesTransactionsPage } from './toutes-les-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: ToutesLesTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToutesLesTransactionsPageRoutingModule {}
