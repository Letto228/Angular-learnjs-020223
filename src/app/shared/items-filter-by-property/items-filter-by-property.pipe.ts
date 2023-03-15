import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemsFilterByProperty',
	pure: true,
})
export class ItemsFilterByPropertyPipe implements PipeTransform {
	transform<T extends object>(value: T[], searchProperty: keyof T, searchProductName: unknown): T[] {
		return value.filter(item => {
			const src = item[searchProperty] as unknown; // нужно, тк иначе отказывается проверять typeof src === 'string'

			if (typeof searchProductName === 'string' && typeof src === 'string') {
				return src.toLowerCase().startsWith(searchProductName);
			}

			return src === searchProductName;
		});
	}
}
