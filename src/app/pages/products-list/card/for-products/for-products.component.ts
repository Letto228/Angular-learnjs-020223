import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-for-products',
	templateUrl: './for-products.component.html',
	styleUrls: ['./for-products.component.css'],
	interpolation: ['{{', '}}'],
})
export class ForProductsComponent {
	@Input()
	iProduct: IProduct | undefined = productMock;

	@Output()
	buyIProduct = new EventEmitter<IProduct['_id'] | undefined>();

	buyProduct(event: Event) {
		event.stopPropagation;

		this.buyIProduct.emit(this.iProduct?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.iProduct && this.iProduct.rating >= starIndex);
	}
}
