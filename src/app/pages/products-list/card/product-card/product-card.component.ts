import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input()
	product: IProduct | undefined;

	@Output()
	sendIdEmitter = new EventEmitter<string>();

	buyProduct(event: MouseEvent) {
		event.stopPropagation();
		// console.log(this.product?._id)
		this.sendIdEmitter.emit(this.product?._id);
	}
}
