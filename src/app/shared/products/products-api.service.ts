import { map, Observable, of } from 'rxjs';
import { IProduct } from './product.interface';
import { productsMock } from './products.mock';

export class ProductsApiService {
	getProducts$(): Observable<IProduct[]> {
		return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
	}
}
