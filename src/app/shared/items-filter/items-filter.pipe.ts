import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product.interface';

@Pipe({
	name: 'itemsFilterByProperty',
})
export class ItemsFilterPipe implements PipeTransform {
	transform(value: IProduct[], searchProperty: string, searchProductName: string): IProduct[] {
		console.log({ value, searchProductName, searchProperty });
		return value.filter((el: IProduct) => {
			if (!searchProductName) {
				return true;
			}
			const currentSearchParam = el[searchProperty as keyof IProduct];
			if (typeof currentSearchParam === 'string') {
				return !!(
					currentSearchParam.toString().toLocaleLowerCase().indexOf(searchProductName.toLocaleLowerCase()) + 1
				);
			} else if (typeof currentSearchParam === 'number') {
				return currentSearchParam.toString() === searchProductName;
			} else {
				return true;
			}
		});
	}
}
