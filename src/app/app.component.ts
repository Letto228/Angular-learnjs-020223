import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

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

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Menu click', event);
	}
}
