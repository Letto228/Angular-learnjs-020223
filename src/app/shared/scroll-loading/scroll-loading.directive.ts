import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { LoadDirection } from './load-direction.enum';

@Directive({
	selector: '[appScrollLoading]',
})
export class ScrollLoadingDirective {
	private offset = 100;

	private prevScrolled = 0;

	@Output() loadData = new EventEmitter<LoadDirection>();

	@HostListener('scroll', ['$event.target'])
	private onScroll(target: HTMLElement): void {
		const isTopReached = target.scrollTop < this.offset;
		const isBottomReached = target.scrollHeight - target.clientHeight - target.scrollTop < this.offset;

		const scrollDirectionDown = target.scrollTop < this.prevScrolled;

		this.prevScrolled = target.scrollTop;

		if (scrollDirectionDown && isTopReached) {
			this.loadData.emit(LoadDirection.Top);

			return;
		}

		if (!scrollDirectionDown && isBottomReached) {
			this.loadData.emit(LoadDirection.Bottom);

			return;
		}
	}
}
