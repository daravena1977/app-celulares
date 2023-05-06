import { Component } from '@angular/core';
import { AccesoriosService } from 'src/app/accesorios/accesorios.service';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { ReparacionesService } from 'src/app/reparaciones/reparaciones.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [    `
      #sidebar {
        height: 100vh;
      }
    `,
  ],
})
export class SidebarComponent {

  constructor(
    private sidebarService: SidebarService ) {

  }

  optionsSideBar(): OptionsSidebar [] {
    return this.sidebarService.optionsSidebar
  }



}
