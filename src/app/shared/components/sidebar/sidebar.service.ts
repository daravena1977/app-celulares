import { Injectable } from '@angular/core';
import { CacheStoreSidebar } from 'src/app/interfaces/cache-store-sidebar.interface';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public cacheStoreSidebar: CacheStoreSidebar = {
    reparaciones: [
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
    ],
    accesorios: [
      {
        name: 'Ingresar Accesorios',
        route: 'accesorios/new-accesorio'
      },
      {
        name: 'Buscar Accesorios',
        route: 'accesorios/search-accesorio'
      },
    ],
    repuestos: [
      {
        name: 'Ingresar Repuestos',
        route: 'repuestos/new-repuesto'
      },
      {
        name: 'Buscar Repuestos',
        route: 'repuestos/search-repuesto'
      },
    ],
  }

  private _optionsSidebar!: OptionsSidebar[];

  constructor() { }

  set optionsSideBar(options: OptionsSidebar[]) {
    this._optionsSidebar = options;
  }

  get optionsSidebar(): OptionsSidebar[] {
    return this._optionsSidebar;
  }

  get optionsReparaciones (){
    return this.cacheStoreSidebar.reparaciones

  }

  get optionsAccesorios() {
    return this.cacheStoreSidebar.accesorios
  }

  get optionsRepuestos() {
    return this.cacheStoreSidebar.repuestos
  }



}
