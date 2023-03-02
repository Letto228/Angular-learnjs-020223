import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';
import { applicationConfigMock } from '../../shared/application-config/application-config.mock';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input()
	applicationConfig: IApplicationConfig | undefined;

	@Output()
	menuClick = new EventEmitter<string>();

	onClick() {
		this.menuClick.emit('click');
	}
}
