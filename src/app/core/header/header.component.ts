import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	// inputs: ['applicationConfig'],
})
export class HeaderComponent {
	// @Input('config')
	@Input()
	applicationConfig: IApplicationConfig | undefined;

	@Output()
	menuClick = new EventEmitter<string>();

	onClick() {
		// event.stopPropagation();
		console.log('Menu click');
		this.menuClick.emit('click');
	}
}
