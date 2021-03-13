import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    canActivate:[AuthGuard],
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'mes-transactions',
    loadChildren: () => import('./mes-transactions/mes-transactions.module').then( m => m.MesTransactionsPageModule)
  },
  {
    path: 'toutes-les-transactions',
    loadChildren: () => import('./toutes-les-transactions/toutes-les-transactions.module').then( m => m.ToutesLesTransactionsPageModule)
  },
  {
    path: 'mes-commissions',
    loadChildren: () => import('./mes-commissions/mes-commissions.module').then( m => m.MesCommissionsPageModule)
  },
  {
    path: 'calculateur-frais',
    canActivate:[AuthGuard],
    loadChildren: () => import('./calculateur-frais/calculateur-frais.module').then( m => m.CalculateurFraisPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
