import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';
import { applicationConfigMock } from '../../shared/application-config/application-config.mock';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	applicationConfig: IApplicationConfig | undefined;

	@Output()
	menuClick = new EventEmitter<string>();

	onClick() {
		console.log('Menu click');
		this.menuClick.emit('click');
	}
}
