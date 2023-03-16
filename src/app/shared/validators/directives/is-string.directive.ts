import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { isStringValidator } from '../is-string.validator';

@Directive({
	selector: '[appIsString]',
	providers: [
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: IsStringDirective,
		},
	],
})
export class IsStringDirective implements Validator {
	validate(control: AbstractControl<any, any>): ValidationErrors | null {
		return isStringValidator(control);
	}

	// validate = isStringValidator;
}
