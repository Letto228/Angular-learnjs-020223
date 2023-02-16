import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productMock } from './shared/products/product.mock';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from './shared/products/product.interface';

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
	readonly productInfo = productMock;
	readonly applicationConfig = applicationConfigMock;
	isSidenavOpened = true;

	constructor(private _snackBar: MatSnackBar) {}

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Menu click', event);
	}

	public addToCart(product: IProduct) {
		this._snackBar.open(`Вы добавили '${product.name}' в корзину`, 'Отлично', { duration: 5 * 1000 });
	}
}
