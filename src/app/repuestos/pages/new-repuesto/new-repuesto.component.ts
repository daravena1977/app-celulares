import { Component, OnInit } from '@angular/core';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'app-new-repuesto',
  templateUrl: './new-repuesto.component.html',
  styleUrls: ['./new-repuesto.component.css']
})
export class NewRepuestoComponent implements OnInit {

  private _optionsSidebar: OptionsSidebar[] = [];

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsRepuestos;
    this.sidebarService.optionsSideBar = this._optionsSidebar;
  }



}
