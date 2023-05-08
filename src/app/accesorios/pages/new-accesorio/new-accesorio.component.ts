import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'accesorios-new',
  templateUrl: './new-accesorio.component.html',
  styleUrls: ['./new-accesorio.component.css']
})
export class NewAccesorioComponent implements OnInit {
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
