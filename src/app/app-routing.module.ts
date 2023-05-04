import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'reparaciones',
    loadChildren: () => import('./reparaciones/reparaciones.module').then(m => m.ReparacionesModule)
  },
  {
    path: '**',
    redirectTo: 'reparaciones',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
