import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/shared/products/product.interface';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	constructor(private dialog: MatDialog) {}

	@Input() product!: IProduct;
	@Input() countItemsOnBuy!: number;

	@Output() buyItems = new EventEmitter<string>();

	currentPictureIndexOnCard = 0;

	OnBuyClick() {
		this.dialog.open(DialogContentComponent);
		this.buyItems.emit(this.product._id);
	}

	onPictureIndexChanged(event: PageEvent) {
		this.currentPictureIndexOnCard = event.pageIndex;
	}
}
