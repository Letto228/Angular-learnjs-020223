import { Component, Input, TemplateRef, SimpleChanges, ViewChild, ViewContainerRef, OnChanges } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
	@Input() template: TemplateRef<unknown> | undefined;

	@ViewChild('popup', { static: false, read: ViewContainerRef })
	popupContainer: ViewContainerRef | undefined;

	ngOnChanges({ template }: SimpleChanges) {
		console.log('this.popupContainer', this.popupContainer);
		console.log('this.template', this.template);

		if (template) {
			this.insertTemplate(this.template);
		}
	}

	private insertTemplate(template: TemplateRef<unknown> | undefined) {
		if (!template) {
			return;
		}

		this.popupContainer?.clear();
		this.popupContainer?.createEmbeddedView(template);
	}
}
