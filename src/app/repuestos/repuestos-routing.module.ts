import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRepuestoComponent } from './pages/new-repuesto/new-repuesto.component';
import { SearchRepuestoComponent } from './pages/search-repuesto/search-repuesto.component';

const routes: Routes = [
  {
    path: 'new-repuesto',
    component: NewRepuestoComponent,
  },
  {
    path: 'search-repuesto',
    component: SearchRepuestoComponent,
  },
  {
    path: '**',
    redirectTo: 'new-repuesto',
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class RepuestosRoutingModule { }
