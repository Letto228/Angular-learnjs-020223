import { Component, Input, OnChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	template: '<div #popup></div>',
})
export class PopupHostComponent implements OnChanges {
	@Input() template: TemplateRef<unknown> | undefined;

	@ViewChild('popup', { static: true, read: ViewContainerRef })
	private popupContainer: ViewContainerRef | undefined;

	ngOnChanges(): void {
		if (this.template) {
			this.popupContainer?.createEmbeddedView(this.template);
		} else {
			this.popupContainer?.clear();
		}
	}
}
