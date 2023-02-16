import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<IProduct['_id'] | undefined>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.productBuy.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
