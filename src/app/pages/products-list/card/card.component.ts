import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<IProduct['_id'] | undefined>();

	// constructor(
	// 	// @Inject('value') private readonly value: any,
	// ) {}

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.productBuy.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
