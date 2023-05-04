import { Component, Input } from '@angular/core';
import { OptionsSidebar } from 'src/app/reparaciones/interfaces/options-sidebar.interface';
import { ReparacionesService } from 'src/app/reparaciones/reparaciones.service';

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

  constructor(private reparacionesService: ReparacionesService ) {

  }

  get optionsSideBar(): OptionsSidebar [] {
    return this.reparacionesService.optionsSideBar
  }



}
