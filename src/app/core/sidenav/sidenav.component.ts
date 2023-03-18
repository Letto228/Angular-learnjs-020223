import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	@Input() isOpened = true;

	@Input() products: IProduct;

	@Output() isOpenedChange = new EventEmitter<boolean>();

	@Output() buyProduct = new EventEmitter<boolean>();

	public toggleSidenavOpened() {
		this.isOpenedChange.emit(!this.isOpened);
	}

	public buyProducts(event: string | undefined) {
		console.log(event);
		if (event) {
			this.buyProduct.emit(true);
		}
	}
}
