import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NameArticleValidator }
from '../validators/name-article.validator';

@Component({
  selector: 'app-article-new-reactive',
  standalone: false,
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  submitted = false;

  nextId = 1;

  imagePattern =
    'https?:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}\\/.*';

  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.articleForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          NameArticleValidator.forbiddenName
        ]
      ],

      price: [
        '',
        [
          Validators.required,
          Validators.min(0.1)
        ]
      ],

      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(this.imagePattern)
        ]
      ],

      isOnSale: [false]
    });
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.articleForm.valid) {

      const newArticle = {

        id: this.nextId++,

        quantityInCart: 0,

        ...this.articleForm.value
      };

      console.log(
        'Artículo reactivo creado:',
        newArticle
      );

      this.articleForm.reset();

      this.articleForm.patchValue({
        isOnSale: false
      });

      this.submitted = false;
    }
  }

  get f() {
    return this.articleForm.controls;
  }
}