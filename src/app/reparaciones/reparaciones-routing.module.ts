import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRepairComponent } from './pages/new-repair/new-repair.component';
import { SearchRepairComponent } from './pages/search-repair/search-repair.component';
import { CotizarRepairComponent } from './pages/cotizar-repair/cotizar-repair.component';

const routes: Routes = [
  {
    path: 'new-reparacion',
    component: NewRepairComponent
  },
  {
    path: 'search-reparacion',
    component: SearchRepairComponent
  },
  {
    path: 'cotizar-reparacion',
    component: CotizarRepairComponent
  },
  {
    path: '**',
    redirectTo: 'new-reparacion'
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class ReparacionesRoutingModule { }
