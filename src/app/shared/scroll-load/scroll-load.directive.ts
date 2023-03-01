import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ScrollDirection } from './scroll-load.model';

@Directive({
	selector: '[appScrollLoad]',
})
export class ScrollLoadDirective {
	@Input() distance = 100;
	@Output() borderReachedHandler = new EventEmitter<ScrollDirection>();

	@HostListener('scroll', ['$event'])
	onScroll(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const bottomPosition = Math.round(target.scrollTop + target.clientHeight);
		const top = Math.round(target.scrollTop);

		const isOnTop = top <= this.distance;
		const isOnBottom = bottomPosition >= target.scrollHeight - this.distance;

		if (isOnBottom) {
			this.borderReachedHandler.emit(ScrollDirection.down);
		}

		if (isOnTop) {
			this.borderReachedHandler.emit(ScrollDirection.up);
		}
	}
}
