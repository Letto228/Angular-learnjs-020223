import { Component, Input, OnChanges, TemplateRef, ViewChild, ViewContainerRef, HostBinding } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
	@Input() template: TemplateRef<unknown> | undefined;

	@ViewChild('popupContainer', { static: true, read: ViewContainerRef })
	private popupContainer: ViewContainerRef | undefined;

	@HostBinding('class.hidden')
	get hidden() {
		return !this.template;
	}

	ngOnChanges(): void {
		if (this.template) {
			this.popupContainer?.createEmbeddedView(this.template);
		} else {
			this.popupContainer?.clear();
		}
	}
}
