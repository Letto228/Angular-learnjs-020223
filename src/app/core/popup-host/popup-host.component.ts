import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	OnChanges,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
	@Input() set template(template: TemplateRef<any> | undefined) {
		if (!this.isViewportClear) {
			this.viewportViewContainer.clear();
		}

		if (template) {
			this.viewportViewContainer.createEmbeddedView(template);
		}

		this.isViewportClear = !this.viewportViewContainer.length;
	}

	@ViewChild('viewport', { read: ViewContainerRef, static: true })
	private viewportViewContainer!: ViewContainerRef;

	@HostBinding('class.empty')
	isViewportClear = true;
}
