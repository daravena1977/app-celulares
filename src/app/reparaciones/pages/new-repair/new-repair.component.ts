import { Component, OnInit } from '@angular/core';
import { OptionsSidebar } from '../../../interfaces/options-sidebar.interface';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';

@Component({
  selector: 'reparaciones-new',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css'],
})
export class NewRepairComponent implements OnInit {
  private _optionsSidebar: OptionsSidebar[] = [];

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit(): void {
    this._optionsSidebar = this.sidebarService.optionsReparaciones;
    this.sidebarService.optionsSideBar = this._optionsSidebar;
  }
}

