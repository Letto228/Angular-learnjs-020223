import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LetContext } from './let-context.interface';

@Directive({
	selector: '[appLet]',
})
export class LetDirective<T> {
	@Input()
	set appLet(data: T) {
		this.viewContainerRef.clear();
		this.viewContainerRef.createEmbeddedView(this.templateRef, {
			$implicit: data,
			appLet: data,
		});
	}

	constructor(
		private readonly templateRef: TemplateRef<LetContext<T>>,
		private readonly viewContainerRef: ViewContainerRef,
	) {}
}
