import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	productRequest: IProduct = productMock;
	countItems = 0;

	@Input() isOpened = true;

	@Output() isOpenedChange = new EventEmitter<boolean>();

	toggleSidenavOpened() {
		// this.isSidenavOpened = !this.isSidenavOpened;
		this.isOpenedChange.emit(!this.isOpened);
	}

	reduceItems(event: number) {
		this.countItems += event;
	}
}
