import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { map, tap, switchMap } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	// providers: [
	// 	{
	// 		provide: 'name',
	// 		useValue: 'ProductsListComponent',
	// 	}
	// ]
})
export class ProductsListComponent {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategory')),
		tap(subcategoryId => {
			this.productsStoreService.loadProducts(subcategoryId);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	searchValue = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	navigateToProduct() {
		// this.router.navigate(['/product', 'id']);
		this.router.navigateByUrl('/product/id');
	}
}
