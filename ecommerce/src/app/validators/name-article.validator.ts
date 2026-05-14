import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameArticleValidator {

    static forbiddenName(
        control: AbstractControl
    ): ValidationErrors | null {

    const forbiddenNames = [
        'Prueba',
        'Test',
        'Mock',
        'Fake'
    ];

    if (
        forbiddenNames.includes(control.value)
    ) {
        return {
            forbiddenName: true
        };
    }

    return null;
    }
}