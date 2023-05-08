import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsSidebar } from 'src/app/interfaces/options-sidebar.interface';

@Component({
  selector: 'shared-options-sidebar',
  templateUrl: './options-sidebar.component.html',
  styleUrls: ['./options-sidebar.component.css']
})
export class OptionsSidebarComponent {

  constructor(private router: Router) {

  }

  @Input()
  public opciones!: OptionsSidebar[];


}

