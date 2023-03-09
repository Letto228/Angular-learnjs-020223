import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { breackPoint, LoadDirection } from './endless-scroll-constants';
import { IEventProps } from './endless-scroll.interface';

@Directive({
	selector: '[appEndlessScroll]',
})
export class EndlessScrollDirective {
	@Output() updateChecker = new EventEmitter<LoadDirection>();

	@HostListener('scroll', ['$event'])
	onScroll({ scrollTop, scrollHeight, clientHeight }: IEventProps) {
		const itsTimeToTopUpload = scrollTop < breackPoint;
		const itsTimeToBottomUpload = scrollHeight - breackPoint <= clientHeight + scrollTop;

		if (itsTimeToBottomUpload) {
			this.updateChecker.emit(LoadDirection.Before);
		}

		if (itsTimeToTopUpload) {
			this.updateChecker.emit(LoadDirection.After);
		}
	}
}
