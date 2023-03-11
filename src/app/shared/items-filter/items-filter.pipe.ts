import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemsFilterByProperty',
})
export class ItemsFilterPipe implements PipeTransform {
	transform<T, P extends keyof T>(value: T[], searchProperty: P, searchValue: T[P]): T[] {
		if (!searchValue) {
			return value;
		}

		return value.filter((el: T) => {
			const currentSearchParam = el[searchProperty];
			if (typeof currentSearchParam === 'string') {
				const searchString = (searchValue as string).toLocaleLowerCase();
				const productName = currentSearchParam.toLocaleLowerCase();
				return productName.includes(searchString);
			} else {
				return currentSearchParam === searchValue;
			}
		});
	}
}
