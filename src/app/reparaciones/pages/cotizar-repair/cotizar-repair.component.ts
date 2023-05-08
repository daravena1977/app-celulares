import { Component } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';
import { ReparacionesService } from '../../reparaciones.service';

@Component({
  selector: 'reparaciones-cotizar-repair',
  templateUrl: './cotizar-repair.component.html',
  styleUrls: ['./cotizar-repair.component.css']
})
export class CotizarRepairComponent {
  private _optionsSidebar: OptionsSidebar[] = [];

  constructor(
    private sidebarService: SidebarService,
    private reparacionesSerice: ReparacionesService) {


  }

  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsReparaciones;
    this.sidebarService.optionsSideBar = this._optionsSidebar;

  }
}
