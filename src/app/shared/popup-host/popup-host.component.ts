import { Component, HostBinding, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
	@Input() template: TemplateRef<HTMLElement> | undefined;

	@HostBinding('class.overlay') get overlay() {
		return this.template;
	}
	@HostBinding('class.hidden') get hidden() {
		return !this.template;
	}
}
