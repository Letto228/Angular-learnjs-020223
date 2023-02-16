import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input() public productInfo!: IProduct;
	@Output() public buyButtonClick = new EventEmitter<IProduct>();

	public buy(event: MouseEvent): void {
		event.stopPropagation();
		this.buyButtonClick.emit(this.productInfo);
	}
}
