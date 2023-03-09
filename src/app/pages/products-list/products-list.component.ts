import { HttpBackend } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsApiService } from '../../shared/products/products-api.service';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';
import { toJson } from '../../shared/to-json/to-json';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	// private readonly productsStoreService = new ProductsStoreService(
	// new ProductsApiService(
	// 	new AbortController(),
	// 	new HttpBackend()
	// )
	// );

	readonly products$ = this.productsStoreService.products$;

	searchProductName = '';
	searchProperty: keyof IProduct = 'name';

	// products: IProduct[] | undefined = undefined;

	// user = {
	// 	name: 'Egor',
	// }

	constructor(
		// @Inject('ProductsStoreService')
		// private readonly productsStoreServiceStr: ProductsStoreService,
		// @Inject(ProductsStoreService)
		// private readonly productsStoreService: ProductsStoreService,
		private readonly productsStoreService: ProductsStoreService,
		// @Inject('name')
		// nameFromDIByMulty: string[],
		@Inject('name')
		nameFromDI: string,
		// @Inject(123)
		// private readonly byToken: ChangeDetectorRef,
		// @Inject(ChangeDetectorRef)
		// private readonly changeDetectorRef: ChangeDetectorRef,
		// private readonly changeDetectorRef: ChangeDetectorRef,
	) {
		console.log(nameFromDI);
		// console.log(this.productsStoreServiceStr === this.productsStoreService);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
		// this.changeDetectorRef.detach();

		// setTimeout(() => { // 1
		// 	this.changeDetectorRef.detectChanges();
		// }, 100)

		// setTimeout(() => { // 2
		// this.user = {
		// 	name: 'Igor',
		// };
		// this.products = productsMock;
		// this.changeDetectorRef.markForCheck();
		// this.changeDetectorRef.detectChanges();
		// }, 3000);

		// setInterval(() => {
		// 	this.changeDetectorRef.detectChanges();
		// }, 1000);

		// setTimeout(() => { // 3
		// 	this.changeDetectorRef.reattach();
		// }, 4000);

		// setTimeout(() => { // 4
		// 	this.products = productsMock.slice(2);
		// 	// this.changeDetectorRef.detectChanges();
		// 	this.changeDetectorRef.markForCheck();
		// }, 6000);
	}

	getProductJson(product: IProduct): string {
		console.log('From method');
		return toJson(product);
	}

	// getProductJson = toJson;

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	inputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		if (value) {
			this.searchProductName = value;
		} else {
			this.searchProductName = '';
		}
	}
}
