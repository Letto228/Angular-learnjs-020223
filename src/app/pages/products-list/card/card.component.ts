import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit, OnChanges {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<IProduct['_id'] | undefined>();

	ngOnInit() {
		console.log('InitCard', this.product?._id);
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.productBuy.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
