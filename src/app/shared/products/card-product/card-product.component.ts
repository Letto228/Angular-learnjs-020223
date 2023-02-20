import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../product.interface';

@Component({
	selector: 'app-card-product',
	templateUrl: './card-product.component.html',
	styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
	@Input()
	product: IProduct | undefined;

	@Output()
	productEmitter = new EventEmitter<IProduct | undefined>();

	handleClickCard($event: MouseEvent, product: IProduct | undefined) {
		$event.stopPropagation();
		this.productEmitter.emit(product);
	}
}
