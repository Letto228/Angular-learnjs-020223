import { Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;
	readonly product = productMock;

	isSidenavOpened = true;

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}
}
