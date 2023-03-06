import { ChangeDetectionStrategy, Component, Host, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'ProductsListComponent',
		},
	],
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.productsStoreService.products$;

	searchValuew = '';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		// @Inject('buttons') readonly buttons: string[],
		@Inject('name') @Self() @Optional() readonly name: string | null,
		@Inject('name') @SkipSelf() readonly parentName: string,
		@Inject('name') @Host() @SkipSelf() @Optional() readonly hostName: string | null,
	) {
		console.log('name', this.name);
		console.log('parentName', this.parentName);
		console.log('hostName', this.hostName);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}
}
