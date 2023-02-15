import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() item?: IProduct;
	@Output() addToCardEvent = new EventEmitter<string>();
	readonly currency: string = 'руб.';

	addToCard(event: MouseEvent, id?: string) {
		console.log('Клик по кнопке: ', event);
		event.stopPropagation();
		this.addToCardEvent.emit(id);
	}

	onCardClick(event: MouseEvent) {
		console.error('Клик по карточке: ', event);
	}
}
