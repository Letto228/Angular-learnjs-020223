import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.httpClient.get<{ data: IProduct }>(`/products/${id}`).pipe(map(({ data }) => data));
	}
}
