import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product.interface';

@Pipe({
	name: 'itemsFilterByProperty',
})
export class ItemsFilterPipe implements PipeTransform {
	transform(value: IProduct[], searchProperty: string, searchProductName: string): IProduct[] {
		console.log(value);

		return value;
	}
}
