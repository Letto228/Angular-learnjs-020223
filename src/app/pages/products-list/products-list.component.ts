import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	// readonly products$ = this.productsStoreService.products$
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('category')),
		// filter(Boolean),
		tap(categoryId => {
			this.productsStoreService.loadProducts(categoryId);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	searchValue = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	// ngOnInit() {
	// 	this.productsStoreService.loadProducts();
	// }

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	navigateToProduct() {
		// this.router.navigate(['/product', 'id']);
		this.router.navigateByUrl('/product/id');
	}
}
