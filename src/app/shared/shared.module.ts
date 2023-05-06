import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OptionsSidebarComponent } from './components/options-sidebar/options-sidebar.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    OptionsSidebarComponent,
    TopBarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    OptionsSidebarComponent,
    TopBarComponent
  ]
})
export class SharedModule { }
