import { Component } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';
import { AccesoriosService } from '../../accesorios.service';

@Component({
  selector: 'accesorios-search',
  templateUrl: './search-accesorio.component.html',
  styleUrls: ['./search-accesorio.component.css']
})
export class SearchAccesorioComponent {
  private _optionsSidebar: OptionsSidebar[] = [];


  constructor(
    private sidebarService: SidebarService,
    private accesoriosService: AccesoriosService) {

  }
  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsAccesorios
    this.sidebarService.optionsSideBar = this._optionsSidebar
  }


}
