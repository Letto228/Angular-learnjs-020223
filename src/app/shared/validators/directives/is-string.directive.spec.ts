import { FormControl } from '@angular/forms';
import { IsStringDirective } from './is-string.directive';

describe('IsStringDirective', () => {
	const directive = new IsStringDirective();

	it('should create an instance', () => {
		expect(directive).toBeTruthy();
	});

	it('Форма без числа', () => {
		const error = directive.validate(new FormControl('String 1'));

		expect(error).toBeNull();
	});

	it('Форма c числом', () => {
		const error = directive.validate(new FormControl('123'));

		expect(error).toEqual({ isString: 'Input valuew not string' });
	});
});
