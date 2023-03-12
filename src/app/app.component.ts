import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
	interpolation: ['{{', '}}'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;
	isSidenavOpened = true;
	readonly product = productMock;

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Menu click', event);
	}
}
