import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	readonly product = productMock;

	@Input()
	isOpened = true;

	@Output()
	isOpenedChange = new EventEmitter<boolean>();

	toggleSidenavOpened() {
		// this.isSidenavOpened = !this.isSidenavOpened;
		this.isOpenedChange.emit(!this.isOpened);
	}
}
