import {
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
})
export class PopupHostComponent implements OnChanges {
	@Input()
	template: TemplateRef<any> | undefined;

	@ViewChild('templateContainer', { static: true, read: ViewContainerRef })
	private templateContainer!: ViewContainerRef;

	@HostBinding('class.showed')
	get showed() {
		return this.template;
	}

	@HostBinding('class.hidden')
	get hidden() {
		return !this.template;
	}

	ngOnChanges({ template }: SimpleChanges) {
		if (template) {
			this.insertTemplate(this.template);
		}
	}

	private insertTemplate(template: TemplateRef<any> | undefined) {
		this.templateContainer.clear();

		if (!template) {
			return;
		}

		this.templateContainer.createEmbeddedView(template);
	}
}
