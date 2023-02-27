import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	@HostListener('click')
	onClick() {
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	@HostBinding('style.boxShadow')
	get boxShadow(): string {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	private isBoxShadowActive = false;
}
