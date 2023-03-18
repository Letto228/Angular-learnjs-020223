import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
	@Input() public template: TemplateRef<unknown> | undefined;

	@ViewChild('viewport', { read: ViewContainerRef, static: true })
	private viewportViewContainer!: ViewContainerRef;

	public isViewportClear = true;

	ngOnChanges({ template }: SimpleChanges) {
		if (template) {
			this._updatePopupContent(this.template);
		}
	}

	private _updatePopupContent(template: TemplateRef<unknown> | undefined) {
		if (!this.isViewportClear) {
			this.viewportViewContainer.clear();
		}

		if (template) {
			this.viewportViewContainer.createEmbeddedView(template);
		}

		this.isViewportClear = !this.viewportViewContainer.length;
	}
}
