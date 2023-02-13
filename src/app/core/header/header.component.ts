import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';
import { applicationConfigMock } from '../../shared/application-config/application-config.mock';

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
