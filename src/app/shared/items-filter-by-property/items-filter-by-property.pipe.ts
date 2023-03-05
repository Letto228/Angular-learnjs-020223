import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemsFilterByProperty',
	pure: true,
})
export class ItemsFilterByPropertyPipe implements PipeTransform {
	transform<T extends object>(value: T[], searchProperty: string, searchProductName: unknown): T[] {
		const searchParam = typeof searchProductName === 'string' ? searchProductName.toLowerCase() : searchProductName;

		return value.filter(item => {
			if (!Object.hasOwn(item, searchProperty)) {
				return false;
			}

			const key = searchProperty as keyof T;
			const src = item[key] as unknown;

			console.log(typeof src === 'string');

			return typeof src === 'string' ? src.toLowerCase().startsWith(searchParam as string) : src === searchParam;
		});
	}
}
