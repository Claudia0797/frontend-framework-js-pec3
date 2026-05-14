import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item';
import { Article } from '../models/article.model';
import { ArticleQuantityChange } from '../models/article-quantity-change.model';

@Component({
  selector: 'app-article-list',
  standalone: false,
  imports: [ArticleItemComponent],
  template: `
    <div class="list">
      <app-article-item
        *ngFor="let article of articles"
        [article]="article"
        (quantityChange)="actualizarCantidad($event)">
      </app-article-item>
    </div>
  `,
  styles: [
    ` .list {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  `,
  ],
})
export class ArticleListComponent {
  articles: Article[] = [
    {
      id: 1,
      name: 'Ordenador',
      imageUrl: 'https://picsum.photos/200/300',
      price: 870,
      isOnSale: true,
      quantityInCart: 1,
    },
    {
      id: 2,
      name: 'Cascos',
      imageUrl: 'https://picsum.photos/200/300',
      price: 150,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Móvil plegable',
      imageUrl: 'https://picsum.photos/200/300',
      price: 900,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  actualizarCantidad(event: ArticleQuantityChange) {
    const article = this.articles.find(
      (elemento) => elemento.id === event.article.id
    );

    if (!article) return;

    const nuevaCantidad = article.quantityInCart + event.selectedQuantity;

    if (nuevaCantidad >= 0) {
      article.quantityInCart = nuevaCantidad;
    }
  }
}
