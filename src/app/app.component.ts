import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
	readonly productList = [productMock, productMock, productMock, productMock, productMock, productMock];
	readonly applicationConfig = applicationConfigMock;
	isSidenavOpened = true;

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Menu click', event);
	}
	onAddToCard(id: string) {
		console.log('В корзину добавлен: ', id);
	}
}
