import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective {
	@Input()
	set appDumpNgIf(visibilityFlag: any) {
		const isContainerHasView = this.viewContainerRef.length;

		if (visibilityFlag && !isContainerHasView) {
			this.viewContainerRef.createEmbeddedView(this.templateRef, { name: 'Egor', $implicit: 'is implisit' });

			return;
		}

		if (!visibilityFlag && isContainerHasView) {
			this.viewContainerRef.clear();

			return;
		}
	}
	// directive.appDumpNgIf = element.appDumpNgIf;

	constructor(
		// private readonly templateRef: TemplateRef<unknown>,
		private readonly templateRef: TemplateRef<{
			$implicit: string;
			name: string;
		}>,
		private readonly viewContainerRef: ViewContainerRef,
	) {}
}
