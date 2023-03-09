import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product.interface';

@Pipe({
	name: 'itemsFilterByProperty',
})
export class ItemsFilterPipe implements PipeTransform {
	transform(value: IProduct[], searchProperty: keyof IProduct, searchProductName: string): IProduct[] {
		if (!searchProductName) {
			return value;
		}

		return value.filter((el: IProduct) => {
			const currentSearchParam = el[searchProperty];
			if (typeof currentSearchParam === 'string') {
				const searchString = searchProductName.toLocaleLowerCase();
				const productName = currentSearchParam.toLocaleLowerCase();
				return productName.includes(searchString);
			} else if (typeof currentSearchParam === 'number') {
				return currentSearchParam === Number(searchProductName);
			} else {
				return true;
			}
		});
	}
}
