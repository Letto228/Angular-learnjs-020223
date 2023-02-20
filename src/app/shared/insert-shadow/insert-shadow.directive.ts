import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	@HostListener('click', ['$event.x', '$event.y'])
	onClick(x: number, y: number) {
		// console.log('click', x, y);

		// this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
		this.isBoxShadowActive = !this.isBoxShadowActive;

		// event.preventDefault();
		// return false;
	}

	@HostBinding('style.boxShadow')
	get boxShadow(): string {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}
	// boxShadow = '';
	// element.style.boxShadow = directive.boxShadow;

	private isBoxShadowActive = false;

	// constructor(
	//   private readonly elementRef: ElementRef<HTMLElement>,
	// ) {
	//   console.log(this.elementRef.nativeElement.setAttribute());
	// }
}
