import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { filter, map, of, switchMap, tap } from 'rxjs';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { addProducts, loadProducts } from './products.actions';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
	constructor(private readonly action$: Actions, private readonly productsApiService: ProductsApiService) {}

	loadProducts$ = createEffect(() =>
		this.action$.pipe(
			ofType(loadProducts),
			// filter(({type}: Action) => type === ProductsActionTypes.LoadProducts),
			switchMap(({ subCategoryId }) =>
				this.productsApiService.getProducts$(subCategoryId).pipe(map(products => addProducts(products))),
			),
		),
	);

	addProductsLog$ = createEffect(
		() =>
			this.action$.pipe(
				ofType(addProducts),
				tap(({ products }) => {
					console.log(products);
					// this.store.dispatch();
				}),
				// switchMap(() => {
				//     console.log('work');

				//     return of(null);
				// })
				// filter(({type}: Action) => type === ProductsActionTypes.LoadProducts),
			),
		{ dispatch: false },
	);
}
