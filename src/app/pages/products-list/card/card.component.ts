import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from './../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input()
	product: IProduct | undefined;

	@Output()
	productBuy = new EventEmitter<string>();

	buyClick() {
		console.log('buy product');
		this.productBuy.emit(this.product?._id);
	}
}
