import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { PaginationContext } from './pagination.model';
import { BehaviorSubject, filter, map } from 'rxjs';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit {
	private itemsSrc: T[] = [];
	private elseTemplateRef: TemplateRef<PaginationContext<T>> | undefined;
	private countPerPage = 1;

	protected context: PaginationContext<T> | undefined;
	private chunkedSrc: Array<T[]> = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	@Input()
	set appPaginationOf(items: T[] | undefined) {
		if (items?.length) {
			this.itemsSrc = items;
		}
	}

	@Input()
	set appPaginationEmpty(templateRef: TemplateRef<PaginationContext<T>> | null) {
		if (templateRef) {
			this.elseTemplateRef = templateRef;
		}
	}

	@Input()
	set appPaginationCountPerPage(count: number) {
		if (count) {
			this.countPerPage = count;
		}

		if (count && this.itemsSrc.length) {
			this.chunkedSrc = this.getSubArray();
		}
	}

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<PaginationContext<T>>,
	) {}

	ngOnInit() {
		if (!this.itemsSrc.length && this.elseTemplateRef) {
			this.viewContainerRef.clear();
			this.viewContainerRef.createEmbeddedView(this.elseTemplateRef, this.context);
			return;
		}

		if (this.itemsSrc.length && this.countPerPage > 1) {
			this.chunkedSrc = this.getSubArray();
		}

		this.listenCurrentIndexChange();
	}

	private updateView() {
		if (!this.itemsSrc?.length) {
			this.viewContainerRef.clear();

			return;
		}
		this.currentIndex$.next(0);
	}

	private getSubArray(): Array<T[]> {
		const subarray = [];
		const array = this.itemsSrc;
		const size = this.countPerPage;

		for (let i = 0; i < Math.ceil(array.length / size); i++) {
			subarray[i] = array.slice(i * size, i * size + size);
		}

		return subarray;
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				filter(Boolean),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentIndex: number): PaginationContext<T> | null {
		if (!this.itemsSrc?.length) {
			return null;
		}

		if (this.countPerPage > 1) {
			const newContext = {
				appPaginationOf: this.itemsSrc,
				chunkedArr: this.chunkedSrc,
				chunk: this.chunkedSrc[currentIndex],
				index: currentIndex,
				count: this.countPerPage,
				controller: {
					prev: this.prev.bind(this),
					next: this.next.bind(this),
					toItem: this.toItem.bind(this),
				},
			};

			return newContext;
		}

		const newContext = {
			$implicit: this.itemsSrc[currentIndex],
			appPaginationOf: this.itemsSrc,
			chunked: [],
			index: currentIndex,
			count: this.countPerPage,
			controller: {
				prev: this.prev.bind(this),
				next: this.next.bind(this),
				toItem: this.toItem.bind(this),
			},
		};

		return newContext;
	}

	ngOnChanges(test: SimpleChanges) {
		const { appPaginationOf, appPaginationCount } = test;

		if (appPaginationOf || appPaginationCount) {
			this.updateView();
		}
		this.updateView();
	}

	next() {
		const nextIndex = this.currentIndex$.value + 1;
		const src = this.countPerPage > 1 ? this.chunkedSrc : this.itemsSrc;
		const newIndex = nextIndex < src.length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	prev() {
		const previousIndex = this.currentIndex$.value - 1;
		const src = this.countPerPage > 1 ? this.chunkedSrc : this.itemsSrc;
		const newIndex = previousIndex >= 0 ? previousIndex : src.length - 1;

		this.currentIndex$.next(newIndex);
	}

	toItem(itemIndex: number) {
		this.currentIndex$.next(itemIndex);
	}
}
