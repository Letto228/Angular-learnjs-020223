// ValidatorFn

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const isStringValidator: ValidatorFn = ({ value }: AbstractControl): ValidationErrors | null => {
	return Number(value) ? { isString: 'Input valuew not string' } : null;
};
