import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	readonly productMock = productMock;

	@Input()
	isOpened = true;

	@Output()
	isOpenedChange = new EventEmitter<boolean>();

	onClickBuyProduct(product: IProduct | undefined): void {
		console.log('SidenavComponent', product);
	}
}
