import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/shared/products/product.interface';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	currentPictureIndexOnCard = 0;
	pictureLength: number | undefined;

	@Input() product!: IProduct;
	@Input() countItemsOnBuy!: number;

	@Output() countBuyedItems = new EventEmitter<number>();

	ngOnInit() {
		console.log(this.product);
		this.pictureLength = this.product?.images?.length;
	}

	OnBuyClick() {
		this.dialog.open(DialogContentComponent);
		this.countBuyedItems.emit(1);
	}

	onPictureIndexChanged(event: PageEvent) {
		this.currentPictureIndexOnCard = event.pageIndex;
	}
}
