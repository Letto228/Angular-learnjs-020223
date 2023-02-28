import {
	Component,
	Input,
	OnChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	HostBinding,
	SimpleChanges,
} from '@angular/core';

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

	ngOnChanges({ template }: SimpleChanges): void {
		if (template) {
			this.updateTemplate(this.template);
		}
	}

	private updateTemplate(template: TemplateRef<unknown> | undefined) {
		this.popupContainer?.clear();

		if (!template) {
			return;
		}

		this.popupContainer?.createEmbeddedView(template);
	}
}
