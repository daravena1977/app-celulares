import { Injectable } from '@angular/core';
import { OptionsSidebar } from './interfaces/options-sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class ReparacionesService {
  private _opcionesSideBar: OptionsSidebar[] = [
    {
      name: 'Nueva Reparación',
      route: 'reparaciones/new-reparacion'
    },
    {
      name: 'Buscar Reparacion',
      route: 'reparaciones/search-reparacion'
    },
    {
      name: 'Cotizar Reparacion',
      route: 'reparaciones/cotizar-reparacion'
    }
  ];
  constructor() {

   }

  get optionsSideBar(): OptionsSidebar[]   {
    return this._opcionesSideBar;
  }
}
