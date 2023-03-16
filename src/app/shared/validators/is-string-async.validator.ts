// ValidatorFn

import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable, tap, timer } from 'rxjs';
import { isStringValidator } from './is-string.validator';

function request(): Observable<unknown> {
	return timer(3000);
}

// export const isStringAsyncValidator: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
//     return request().pipe(map(() => isStringValidator(control)))
// }

export function isStringAsyncValidator({ value }: AbstractControl): Observable<ValidationErrors | null> {
	return request().pipe(
		tap(console.log),
		map(() => (Number(value) ? { isString: 'Input value not string (ASYNC)' } : null)),
	);
}
