import { Pipe, PipeTransform } from '@angular/core';
import { toJson } from './to-json';

@Pipe({
	name: 'toJson',
	pure: true,
})
export class ToJsonPipe implements PipeTransform {
	transform<T extends object>(value: T, defaultValue = ''): string {
		console.log('From pipe');
		try {
			return toJson(value);
		} catch {
			return defaultValue;
		}
	}
}
