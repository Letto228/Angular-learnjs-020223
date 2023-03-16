import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { filter, interval, map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { IProduct } from '../products/product.interface';
import { ProductsStoreService } from '../products/products-store.service';
import { productsMock } from '../products/products.mock';

@Injectable({
	providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProduct[]> {
	constructor(private readonly productsStoreService: ProductsStoreService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
		this.productsStoreService.loadProducts(route.paramMap.get('subCategoryId'));

		// return this.productsStoreService.products$.pipe(
		// 	tap(value => {
		// 		console.log('ProductsResolver', value);
		// 	}),
		// 	filter(Boolean),
		// );

		return of(productsMock);
	}
}
