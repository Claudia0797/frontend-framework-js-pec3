import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: false,
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css'],
})
export class ArticleNewTemplateComponent {
  article = {
    id: 0,
    name: '',
    price: null,
    imageUrl: '',
    isOnSale: false,
  };

  siguienteId = 1;

  formularioEnviado = false;

  imagePattern = 'https?:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}\\/.*';

  onSubmit(form: any): void {
    this.formularioEnviado = true;

    if (form.valid) {
      const newArticle = {
        ...this.article,
        id: this.siguienteId++,
      };

      console.log('Artículo creado:', newArticle);

      form.resetForm();

      this.article = {
        id: 0,
        name: '',
        price: null,
        imageUrl: '',
        isOnSale: false,
      };
    }
  }
}
