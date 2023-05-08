import { Component } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';
import { ReparacionesService } from '../../reparaciones.service';

@Component({
  selector: 'reparaciones-search-repair',
  templateUrl: './search-repair.component.html',
  styleUrls: ['./search-repair.component.css']
})
export class SearchRepairComponent {
  private _optionsSidebar: OptionsSidebar[] = [];

  constructor(
    private sidebarService: SidebarService,
    private reparacionesSerice: ReparacionesService) {


  }

  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsReparaciones
    this.sidebarService.optionsSideBar = this._optionsSidebar;

  }
}
