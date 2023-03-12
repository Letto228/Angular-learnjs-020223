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

	toggleSidenavOpened() {
		this.isOpenedChange.emit(!this.isOpened);
	}
}
