// import { Component, Input } from '@angular/core';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleQuantityChange } from '../models/article-quantity-change.model';


@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent {
  @Input() public article!: Article;

  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  incrementar() {
    this.quantityChange.emit({
      article: this.article,
      selectedQuantity: +1,
    });
  }

  decrementar() {
    this.quantityChange.emit({
      article: this.article,
      selectedQuantity: -1,
    });
  }

  // incrementar() {
  //   this.article.quantityInCart++;
  // }

  // decrementar() {
  //   if (this.article.quantityInCart > 0) {
  //     this.article.quantityInCart--;
  //   }
  // }

}
