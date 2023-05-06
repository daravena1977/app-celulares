import { NgModule } from '@angular/core';

import { NewRepuestoComponent } from './pages/new-repuesto/new-repuesto.component';
import { SearchRepuestoComponent } from './pages/search-repuesto/search-repuesto.component';
import { CommonModule } from '@angular/common';
import { RepuestosRoutingModule } from './repuestos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewRepuestoComponent,
    SearchRepuestoComponent
  ],
  imports: [
    CommonModule,
    RepuestosRoutingModule,
    SharedModule
  ],
  exports: [

  ],
})
export class RepuestosModule { }
