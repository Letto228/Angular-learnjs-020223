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
	product: IProduct | undefined = productMock;

	@Output()
	buyProductById = new EventEmitter<IProduct['_id'] | undefined>();

	buyProduct(event: Event) {
		event.stopPropagation();
		console.log('id = ' + this.product?._id);
		this.buyProductById.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
