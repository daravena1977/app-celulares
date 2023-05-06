import { Injectable } from '@angular/core';

import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _optionsSidebar!: OptionsSidebar[];

  constructor() { }

  set optionsSideBar(options: OptionsSidebar[]) {
    this._optionsSidebar = options;
  }

  get optionsSidebar(): OptionsSidebar[] {
    return this._optionsSidebar;
  }

}
