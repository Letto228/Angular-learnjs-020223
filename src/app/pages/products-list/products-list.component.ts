import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from '../../shared/scroll-with-loading/load-direction.const';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | undefined = undefined;
	perPage = 3;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
			this.changeDetectorRef.markForCheck();
		}, 0);
	}

	getProducts(): IProduct[] | undefined {
		return this.products;
	}

	onLoadData(direction: LoadDirection) {
		console.log(direction);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}
}
