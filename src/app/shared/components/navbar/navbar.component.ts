import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      div a:hover {
        background-color: #a8dadc;
        color: #003566 !important;
      }

      .active {
        background-color: #457b9d;
        color: white !important;
      }
    `,
  ],
})
export class NavbarComponent {
  public opcionesNavBar: string[] = ['Reparaciones', 'Accesorios', 'Respuestos'];

  public isActive: boolean = false;

  onActive(): void {

    this.isActive = true;
  }
}
