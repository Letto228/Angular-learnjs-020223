import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	// template: `
	// <h1>Application works - template</h1>
	// `,
	// styles: ['h1 {color: red}'],
	encapsulation: ViewEncapsulation.Emulated,
	interpolation: ['{{', '}}'],
})
export class AppComponent {
	// readonly title = 'Angular-learnjs-020223';
	// readonly window = window;
	// readonly log = console.log;
	readonly applicationConfig = applicationConfigMock;
	readonly product = productMock;
	isSidenavOpened = true;

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Menu click', event);
	}
}
