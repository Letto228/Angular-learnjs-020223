import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { IProduct } from './product.interface';
import { IProductsDto } from './products.dto';
import { productsMock } from './products.mock';

@Injectable()
export class ProductsApiService {
	constructor(
		@Inject(BASE_URL)
		private readonly baseUrl: string,
		private readonly httpClient: HttpClient,
	) {}

	getProducts$(): Observable<IProduct[]> {
		// const params = new HttpParams();

		// params.set('q', 123);

		return this.httpClient
			.get<IProductsDto>(`${this.baseUrl}/products/suggestion`, {
				// headers: {
				// 	q: '123',
				// },
				// params: params.set('q', 123),
			})
			.pipe(map(({ data }) => data.items));
		// return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
	}
}
