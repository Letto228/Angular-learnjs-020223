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
	productEmitter = new EventEmitter<IProduct['_id'] | undefined>();

	handleClickCard($event: MouseEvent, product: IProduct['_id'] | undefined) {
		$event.stopPropagation();
		this.productEmitter.emit(product);
	}
}
