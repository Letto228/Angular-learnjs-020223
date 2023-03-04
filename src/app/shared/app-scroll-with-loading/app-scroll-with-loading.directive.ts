import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ScrollLoadingDirection } from './scroll-loading-direction.enum';

@Directive({
	selector: '[appScrollWithLoading]',
})
export class AppScrollWithLoadingDirective {
	private borderOffset = 150; //отступ

	@Output()
	scrollLoadingDirection = new EventEmitter<ScrollLoadingDirection | undefined>();

	@HostListener('scroll', ['$event.target'])
	onScroll(target: HTMLElement) {
		const scrollTop = target.scrollTop; //высота невидимой, прокрученной в данный момент, части элемента
		const clientHeight = target.clientHeight; //размер области внутри рамок элемента.
		const scrollHeight = target.scrollHeight; // полная внутренняя высота, включая прокрученную область.

		if (isNeedLoadBefore(this.borderOffset, scrollTop)) {
			this.scrollLoadingDirection.emit(ScrollLoadingDirection.Before);
			return;
		} else if (isNeedLoadAfter(this.borderOffset, scrollHeight, clientHeight, scrollTop)) {
			this.scrollLoadingDirection.emit(ScrollLoadingDirection.After);
		}
	}
}

function isNeedLoadBefore(borderOffset: number, scrollTop: number): boolean {
	return scrollTop <= borderOffset;
}

function isNeedLoadAfter(borderOffset: number, scrollHeight: number, clientHeight: number, scrollTop: number): boolean {
	const position = scrollHeight - scrollTop - clientHeight;
	return position <= borderOffset;
}
