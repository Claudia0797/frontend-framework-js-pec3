import { Article } from './article.model';

export interface ArticleQuantityChange {
    article: Article;
    selectedQuantity: number;
}
