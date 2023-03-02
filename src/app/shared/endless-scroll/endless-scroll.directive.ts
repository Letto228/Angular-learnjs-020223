import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appEndlessScroll]',
})
export class EndlessScrollDirective {
	private needToUpdateBottom = false;
	private needToUpdateTop = false;
	private breackPoint = { max: 400, middle: 250, min: 100 };

	@HostListener('scroll', ['$event.target.scrollTop', '$event.target.scrollHeight', '$event.target.clientHeight'])
	onScroll(scrollTop: number, scrollHeight: number, clientHeight: number) {
		const its_time_to_top_upload = scrollHeight < this.breackPoint.min;
		const its_time_to_bottom_upload = scrollHeight - this.breackPoint.min <= clientHeight + scrollTop;

		if (its_time_to_bottom_upload && !this.needToUpdateBottom) {
			this.updateProductList(its_time_to_bottom_upload);
			this.needToUpdateBottom = its_time_to_bottom_upload;
		}

		if (its_time_to_top_upload && !this.needToUpdateTop) {
			this.updateProductList(its_time_to_top_upload);
			this.needToUpdateTop = its_time_to_top_upload;
		}
	}

	@Output() updateChecker = new EventEmitter<boolean>();

	updateProductList(needToUpdate: boolean) {
		this.updateChecker.emit(needToUpdate);
	}
}
