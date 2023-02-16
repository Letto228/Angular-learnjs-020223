import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input()
	product: IProduct | undefined;

	@Output()
	clickBuy = new EventEmitter<string>();

	imageIndex = 0;

	changeImage() {
		const cntImage = this.product?.images.length;
		this.imageIndex = this.imageIndex + 1 == cntImage ? 0 : this.imageIndex + 1;
	}

	clickBuyButton(event: MouseEvent) {
		event.stopPropagation();
		console.log('clickbuyButton оn Card of product', this.product);
		this.clickBuy.emit(this.product?._id);
	}
}
