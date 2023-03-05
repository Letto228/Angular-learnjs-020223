import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { IPaginationContext } from './pagination-context.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
	private readonly currentPage$ = new BehaviorSubject<number>(0);
	private currentProductGroup: Array<T[]> = [];

	@Input() appPaginationOf: T[] | undefined | null;
	@Input() appPaginationCountProductOnPage = 1;

	constructor(
		private readonly template: TemplateRef<IPaginationContext<T>>,
		private readonly viewContainer: ViewContainerRef,
	) {}

	ngOnInit(): void {
		console.log('ngOnInit', this.appPaginationOf);
		this.listenCurrentPageIndex();
	}

	ngOnChanges({ appPaginationCountProductOnPage, appPaginationOf }: SimpleChanges): void {
		if (appPaginationOf) {
			this.updateView();
		}
		if (appPaginationCountProductOnPage || appPaginationOf) {
			if (!this.appPaginationOf?.length) {
				this.viewContainer.clear();
				return;
			}

			const countProductOnPage: number = this.appPaginationCountProductOnPage,
				productList: T[] = this.appPaginationOf;

			this.currentProductGroup = this.productGroupPicker(countProductOnPage, productList);
			this.currentPage$.next(0);
			console.log(this.currentProductGroup);
		}
	}

	updateView(directionIndex = 0) {
		if (!this.appPaginationOf?.length) {
			this.viewContainer.clear();
			return;
		}

		this.currentPage$.next(directionIndex);
	}

	private listenCurrentPageIndex() {
		this.currentPage$
			.pipe(map(currentPage => this.getCurrnetContext(currentPage, this.currentProductGroup)))
			.subscribe(context => {
				console.log(context);
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

	private getCurrnetContext(currentPage: number, currentProductGroup: Array<T[]>) {
		if (!this.appPaginationOf?.length) {
			return;
		}

		return {
			$implicit: currentProductGroup[currentPage],
			appPaginationOf: this.appPaginationOf,
			pageCount: this.pageCountCalculate(this.appPaginationOf.length, this.appPaginationCountProductOnPage),
			currentPage: this.currentPage$.value,
			next: () => {
				this.next();
			},
			prev: () => {
				this.prev();
			},
		};
	}

	pageCountCalculate(arrayLength: number, itemsOnPage: number): Array<number> {
		return Array(Math.ceil(arrayLength / itemsOnPage))
			.fill('')
			.map((_, index) => index);
	}

	productGroupPicker(countProductOnPage: number, productList: T[]): Array<T[]> {
		const productGroup: T[][] = [];
		const repeat = Math.ceil(productList.length / countProductOnPage);

		for (let i = 0; i < repeat; i++) {
			productGroup.push(productList.splice(0, countProductOnPage));
		}

		// for (let i = 0; i < countProductOnPage; i++) {
		// 	if (productList[i + slices]) {
		// 		productGroup.push(productList[i + slices]);
		// 	}
		// }

		return productGroup;
	}

	private next() {
		console.log('next');
		const nextIndex =
			this.currentPage$.value === this.currentProductGroup.length
				? this.currentPage$.value + 1
				: this.currentProductGroup.length;
		this.currentPage$.next(nextIndex);
	}

	private prev() {
		console.log('prev');
		const previousIndex = this.currentPage$.value === 0 ? this.currentPage$.value - 1 : 0;
		this.currentPage$.next(previousIndex);
	}
}
