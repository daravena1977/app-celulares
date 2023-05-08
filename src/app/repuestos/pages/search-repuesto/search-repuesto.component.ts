import { Component } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'app-search-repuesto',
  templateUrl: './search-repuesto.component.html',
  styleUrls: ['./search-repuesto.component.css']
})
export class SearchRepuestoComponent {

  private _optionsSidebar: OptionsSidebar[] = [];

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsRepuestos;
    this.sidebarService.optionsSideBar = this._optionsSidebar;
  }

}
