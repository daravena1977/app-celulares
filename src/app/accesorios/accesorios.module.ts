import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriosRoutingModule } from './accesorios-routing.module';
import { NewAccesorioComponent } from './pages/new-accesorio/new-accesorio.component';
import { SearchAccesorioComponent } from './pages/search-accesorio/search-accesorio.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewAccesorioComponent,
    SearchAccesorioComponent
  ],
  imports: [
    AccesoriosRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AccesoriosModule { }
