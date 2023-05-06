import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAccesorioComponent } from './pages/new-accesorio/new-accesorio.component';
import { SearchAccesorioComponent } from './pages/search-accesorio/search-accesorio.component';

const routes: Routes = [
  {
    path: 'new-accesorio',
    component: NewAccesorioComponent,
  },
  {
    path: 'search-accesorio',
    component: SearchAccesorioComponent,
  },
  {
    path: '**',
    redirectTo: 'new-accesorio'
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AccesoriosRoutingModule { }
