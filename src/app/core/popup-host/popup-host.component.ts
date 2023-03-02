import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
	@Input() template: TemplateRef<any> | null = null;

	@HostBinding('class.empty')
	get isViewportClear() {
		return !this.template;
	}
}
