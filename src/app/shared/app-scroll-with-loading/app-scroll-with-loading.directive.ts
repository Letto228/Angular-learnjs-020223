import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ScrollLoadingDirection } from './scroll-loading-direction.enum';

@Directive({
	selector: '[appScrollWithLoading]',
})
export class AppScrollWithLoadingDirective {
	@Output()
	scrollLoadingDirection = new EventEmitter<ScrollLoadingDirection | undefined>();

	@HostListener('scroll', ['$event'])
	onScroll(event: any) {
		const target = event.target;
		const scrollTop = target.scrollTop; //высота невидимой, прокрученной в данный момент, части элемента
		const clientHeight = target.clientHeight; //размер области внутри рамок элемента.
		const scrollHeight = target.scrollHeight; // полная внутренняя высота, включая прокрученную область.
		const borderOffset = scrollHeight / 10; //отступ 1/10 от окна

		if (this.isNeedLoadBefore(borderOffset, scrollTop)) {
			this.scrollLoadingDirection.emit(ScrollLoadingDirection.Before);
		} else if (this.isNeedLoadAfter(borderOffset, scrollHeight, clientHeight, scrollTop)) {
			this.scrollLoadingDirection.emit(ScrollLoadingDirection.After);
		}
	}

	isNeedLoadBefore(borderOffset: number, scrollTop: number): boolean {
		return scrollTop <= borderOffset;
	}

	isNeedLoadAfter(borderOffset: number, scrollHeight: number, clientHeight: number, scrollTop: number): boolean {
		const position = scrollHeight - scrollTop - clientHeight;
		return position <= borderOffset;
	}
}
