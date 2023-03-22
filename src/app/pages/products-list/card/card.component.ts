import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from '../../../shared/carousel/carousel.module';

@Component({
	standalone: true,
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule],
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
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
