import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  standalone: false
})
export class ArticleItemComponent {
  @Input() public article!: Article;

  incrementar() {
    this.article.quantityInCart++;
  }

  decrementar() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }

}
