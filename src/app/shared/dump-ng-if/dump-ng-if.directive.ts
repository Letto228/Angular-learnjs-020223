import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective {
	@Input()
	set appDumpNgIf(visibilityFlag: any) {
		const isContainerHasView = this.viewContainerRef.length;

		if (visibilityFlag && !isContainerHasView) {
			this.viewContainerRef.createEmbeddedView(this.templateRef, {
				appDumpNgIf: visibilityFlag,
				$implicit: visibilityFlag,
			});

			return;
		}

		if (!visibilityFlag && isContainerHasView) {
			this.viewContainerRef.clear();

			return;
		}
	}

	constructor(
		private readonly templateRef: TemplateRef<{
			$implicit: any;
			appDumpNgIf: any;
		}>,
		private readonly viewContainerRef: ViewContainerRef,
	) {}
}
