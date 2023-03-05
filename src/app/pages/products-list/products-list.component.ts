import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	NgZone,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { of } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from '../../shared/scroll-with-loading/load-direction.const';
import { CardComponent } from './card/card.component';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly ngZone: NgZone) {}

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
			this.changeDetectorRef.markForCheck();
		}, 3000);
		// setTimeout(() => {
		// 	this.products = productsMock.slice(2);
		// 	this.changeDetectorRef.markForCheck();
		// }, 6000);
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
