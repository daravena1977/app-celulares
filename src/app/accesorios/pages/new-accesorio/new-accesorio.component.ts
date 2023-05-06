import { Component } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'accesorios-new',
  templateUrl: './new-accesorio.component.html',
  styleUrls: ['./new-accesorio.component.css']
})
export class NewAccesorioComponent {
  private _opcionesSideBar: OptionsSidebar[] = [
    {
      name: 'Ingresar Accesorios',
      route: 'accesorios/new-accesorio'
    },
    {
      name: 'Buscar Accesorios',
      route: 'accesorios/search-accesorio'
    },
  ];


  constructor(
    private sidebarService: SidebarService) {

    this.sidebarService.optionsSideBar = this._opcionesSideBar

  }

}
