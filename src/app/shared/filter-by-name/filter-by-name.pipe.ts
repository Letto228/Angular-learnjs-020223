import { Pipe, PipeTransform } from '@angular/core';
import { filterByName } from './filter-by-name';
import { IProduct } from '../products/product.interface';

@Pipe({
	name: 'filterByName',
	pure: true,
})
export class FilterByNamePipe implements PipeTransform {
	transform(products: IProduct[], searchBy: string, defaultValue = []): IProduct[] {
		console.log('From pipe');
		try {
			return filterByName(products, searchBy);
		} catch {
			return defaultValue;
		}
	}
}
