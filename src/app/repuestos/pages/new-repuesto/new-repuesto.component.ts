import { Component } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'app-new-repuesto',
  templateUrl: './new-repuesto.component.html',
  styleUrls: ['./new-repuesto.component.css']
})
export class NewRepuestoComponent {

  private _opcionesSideBar: OptionsSidebar[] = [
    {
      name: 'Ingresar Repuestos',
      route: 'repuestos/new-repuesto'
    },
    {
      name: 'Buscar Repuestos',
      route: 'repuestos/search-repuesto'
    },
  ];


  constructor(
    private sidebarService: SidebarService,
    ) {

      this.sidebarService.optionsSideBar = this._opcionesSideBar

  }
}
