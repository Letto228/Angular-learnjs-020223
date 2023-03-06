import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { IProduct } from './product.interface';
import { IProductsDto } from './products.dto';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private readonly httpClient: HttpClient) {}

	getProducts$(): Observable<IProduct[]> {
		return this.httpClient.get<IProductsDto>(`/products/suggestion`).pipe(map(({ data }) => data.items));
	}
}
