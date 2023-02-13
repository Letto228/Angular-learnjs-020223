import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	@Input()
	isOpened = true;

	@Output()
	isOpenedChange = new EventEmitter<boolean>();

	public products: IProduct = productMock;

	public buyProduct(event: IProduct) {
		console.log('покупка товара', event);
	}
}
