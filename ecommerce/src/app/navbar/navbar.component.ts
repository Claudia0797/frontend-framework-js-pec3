import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styles: `
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #222;
        color: white;
        padding: 15px 30px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      }

      .nav-links {
        display: flex;
        gap: 20px;
        color: white;
      }

      .nav-links a {
        color: white !important;
        text-decoration: none;
        cursor: pointer;
        transition: 0.3s;
        font-size: 16px;
      }

      .nav-links a:hover {
        color: #4da6ff;
      }

      ul li {
        list-style: none;
        color: white;
      }
      
      ul {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      button {
        border: 0;
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