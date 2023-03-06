import { IProduct } from '../products/product.interface';

export function filterByName(products: IProduct[], searchBy: string): IProduct[] {
	return products.filter(v => v.name.toLowerCase().startsWith(searchBy));
}
