import { Component } from '@angular/core';
import { ReparacionesService } from '../../reparaciones.service';
import { OptionsSidebar } from '../../../interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'reparaciones-new',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css'],
})
export class NewRepairComponent {
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


  constructor(
    private sidebarService: SidebarService,
    ) {

      this.sidebarService.optionsSideBar = this._opcionesSideBar

  }




}
