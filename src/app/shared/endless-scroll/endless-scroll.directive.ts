import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appEndlessScroll]',
})
export class EndlessScrollDirective {
	private breackPoint = { max: 400, middle: 250, min: 100 };

	@HostListener('scroll', ['$event.target.scrollTop', '$event.target.scrollHeight', '$event.target.clientHeight'])
	onScroll(scrollTop: number, scrollHeight: number, clientHeight: number) {
		const its_time_to_top_upload = scrollTop < this.breackPoint.min;
		const its_time_to_bottom_upload = scrollHeight - this.breackPoint.min <= clientHeight + scrollTop;

		if (its_time_to_bottom_upload) {
			this.updateProductList('bot_update');
		}

		if (its_time_to_top_upload) {
			this.updateProductList('top_update');
		}
	}

	@Output() updateChecker = new EventEmitter<string>();

	updateProductList(needToUpdate: string) {
		this.updateChecker.emit(needToUpdate);
	}
}
