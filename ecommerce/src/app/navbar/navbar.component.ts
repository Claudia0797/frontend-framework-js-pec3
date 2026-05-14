import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styles: `
      .navbar {
      display: flex;
      gap: 10px;
      padding: 10px;
      background: #f3f3f3;
    }

    button {
      padding: 8px;
      cursor: pointer;
    }
  `,
})
export class NavbarComponent {
  @Output() cambioVista = new EventEmitter<string>();

  cambiarVista(vista: string) {
    this.cambioVista.emit(vista);
  }
}