import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToutesLesTransactionsPageRoutingModule } from './toutes-les-transactions-routing.module';

import { ToutesLesTransactionsPage } from './toutes-les-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToutesLesTransactionsPageRoutingModule
  ],
  declarations: [ToutesLesTransactionsPage]
})
export class ToutesLesTransactionsPageModule {}
