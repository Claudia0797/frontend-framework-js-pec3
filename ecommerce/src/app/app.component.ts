import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  public articuloDePrueba = {
    name: 'iPhone 16',
    imageUrl: 'https://picsum.photos/200/300', // Imagen aleatoria
    price: 25.50,
    isOnSale: true,
    quantityInCart: 0
  };

}
