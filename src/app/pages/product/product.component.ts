import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('id')),
		filter(Boolean),
		tap(id => {
			this.productsStoreService.loadProduct(id);
		}),
		switchMap(() => this.productsStoreService.currentProduct$),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
	) {}
}
