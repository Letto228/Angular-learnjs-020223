import { Component, OnInit } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	readonly applicationConfig = applicationConfigMock;
	readonly product = productMock;

	needViewPopup = false;

	ngOnInit() {
		setTimeout(() => {
			this.needViewPopup = true;
		}, 4000);

		setTimeout(() => {
			this.needViewPopup = false;
		}, 8000);
	}

	// isSidenavOpened = true;

	// toggleSidenavOpened() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }
}
