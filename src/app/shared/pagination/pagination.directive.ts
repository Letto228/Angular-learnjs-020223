import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, filter } from 'rxjs';
import { IPaginationContext } from './pagination-context.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit {
	@Input() appPaginationOf: T[] | undefined;

	@Input() appPaginationCount = 1;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	private appPaginationGroupOf: Array<T[]> = [];

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IPaginationContext<T>>,
	) {}

	ngOnChanges({ appPaginationOf, appPaginationCount }: SimpleChanges) {
		if (appPaginationOf || appPaginationCount) {
			this.updateView();
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	private updateView() {
		if (!this.appPaginationOf?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.appPaginationGroupOf = getPaginationGroups(this.appPaginationOf, this.appPaginationCount);
		this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex, this.appPaginationGroupOf)),
				filter(Boolean),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentIndex: number, itemPageGroups: Array<T[]>): IPaginationContext<T> | null {
		if (!this.appPaginationOf?.length) {
			return null;
		}

		return {
			$implicit: itemPageGroups[currentIndex],
			appPaginationOf: this.appPaginationOf,
			appPaginationCount: this.appPaginationCount,
			index: currentIndex,
			selectedIndex: (index: number) => this.selectedIndex(index),
			pageIndexes: this.getPageIndexes(itemPageGroups),
			next: () => this.next(),
			previous: () => this.previous(),
		};
	}

	private getPageIndexes(itemPageGroups: Array<T[]>): number[] {
		return itemPageGroups.map((_, index) => index);
	}

	private selectedIndex(currentIndex: number): void {
		this.currentIndex$.next(currentIndex);
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < this.appPaginationGroupOf.length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private previous() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : this.appPaginationGroupOf.length - 1;

		this.currentIndex$.next(newIndex);
	}
}

function getPaginationGroups<T>(arr: T[], count: number): Array<T[]> {
	const pages = Math.ceil(arr.length / count);
	return Array.from({ length: pages }, (v, i) => arr.slice(i * count, i * count + count));
}
