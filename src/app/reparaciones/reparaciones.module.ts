import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRepairComponent } from './pages/new-repair/new-repair.component';
import { SearchRepairComponent } from './pages/search-repair/search-repair.component';
import { ReparacionesRoutingModule } from './reparaciones-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CotizarRepairComponent } from './pages/cotizar-repair/cotizar-repair.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { TipoReparacionComponent } from './components/tipo-reparacion/tipo-reparacion.component';



@NgModule({
  declarations: [
    NewRepairComponent,
    SearchRepairComponent,
    CotizarRepairComponent,
    MarcasComponent,
    ModelosComponent,
    TipoReparacionComponent
  ],
  imports: [
    CommonModule,
    ReparacionesRoutingModule,
    SharedModule,


  ],
  exports: [

  ]
})
export class ReparacionesModule { }
