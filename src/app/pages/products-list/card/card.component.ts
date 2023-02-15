import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	productRequest: IProduct = productMock;
	currentPictureIndexOnCard = 0;
	countBuyedProduct = 0;

	onPictureIndexChanged(event: PageEvent) {
		this.currentPictureIndexOnCard = event.pageIndex;
	}

	productHandler(event: boolean) {
		if (event) this.countBuyedProduct += 1;
		console.log(this.countBuyedProduct);
	}
}
