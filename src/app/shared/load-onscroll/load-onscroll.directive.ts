import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

const SCROLL_DIRECTION = {
	UP: 'UP',
	DOWN: 'DOWN',
} as const;

export type SCROLL_DIRECTION = keyof typeof SCROLL_DIRECTION;

@Directive({
	selector: '[appLoadOnscroll]',
})
export class LoadOnscrollDirective {
	public static offset = 100;

	@Output()
	public loadData = new EventEmitter<SCROLL_DIRECTION>();

	@HostListener('scroll', ['$event.target'])
	public onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement): void {
		const bottomScrollPosition = scrollTop;
		const topScrollPosition = clientHeight + scrollTop;

		if (bottomScrollPosition < LoadOnscrollDirective.offset) {
			this.loadData.next(SCROLL_DIRECTION.DOWN);
			return;
		}

		if (topScrollPosition > scrollHeight - LoadOnscrollDirective.offset) {
			this.loadData.next(SCROLL_DIRECTION.UP);
			return;
		}
	}
}
