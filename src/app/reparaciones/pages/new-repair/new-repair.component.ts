import { Component } from '@angular/core';
import { ReparacionesService } from '../../reparaciones.service';
import { OptionsSidebar } from '../../interfaces/options-sidebar.interface';

@Component({
  selector: 'reparaciones-new',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css'],
})
export class NewRepairComponent {



  constructor(private reparacionesService: ReparacionesService) {

  }




}
