import {
	Directive,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { IPaginationContext } from './pagination-context.interface';
import { productGroupPicker } from './product-group-picker.utils';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	private readonly subscription = new Subscription();
	private readonly currentPage$ = new BehaviorSubject<number>(0);
	private currentProductGroup: Array<T[]> = [];

	@Input() appPaginationOf: T[] | undefined | null;
	@Input() appPaginationCountProductOnPage = 1;

	constructor(
		private readonly template: TemplateRef<IPaginationContext<T>>,
		private readonly viewContainer: ViewContainerRef,
	) {}

	ngOnInit(): void {
		// console.log('ngOnInit', this.appPaginationOf);
		this.listenCurrentPageIndex();
	}

	ngOnChanges({ appPaginationCountProductOnPage, appPaginationOf }: SimpleChanges): void {
		if (appPaginationCountProductOnPage || appPaginationOf) {
			if (!this.appPaginationOf?.length) {
				this.viewContainer.clear();
				return;
			}

			this.currentProductGroup = productGroupPicker(this.appPaginationCountProductOnPage, this.appPaginationOf);
			this.currentPage$.next(0);
			// console.log(this.currentProductGroup);
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	private listenCurrentPageIndex() {
		this.subscription.add(
			this.currentPage$
				.pipe(map(currentPage => this.getCurrnetContext(currentPage, this.currentProductGroup)))
				.subscribe(context => {
					// console.log(context);
					this.viewContainer.clear();
					this.viewContainer.createEmbeddedView(this.template, context);
				}),
		);
	}

	private getCurrnetContext(currentPage: number, currentProductGroup: Array<T[]>) {
		if (!this.appPaginationOf?.length) {
			return;
		}

		return {
			$implicit: currentProductGroup[currentPage],
			appPaginationOf: this.appPaginationOf,
			pageIndexes: this.pageCountCalculate(currentProductGroup),
			currentPage: this.currentPage$.value,
			next: () => {
				this.next();
			},
			prev: () => {
				this.prev();
			},
			navigateToPage: (pageNumber: number) => {
				this.navigateToPage(pageNumber);
			},
		};
	}

	private pageCountCalculate(setProductByGroup: T[][]): Array<number> {
		return setProductByGroup.map((_, index) => index);
	}

	private next() {
		console.log('next');
		const nextIndex =
			this.currentPage$.value === this.currentProductGroup.length - 1
				? this.currentProductGroup.length - 1
				: this.currentPage$.value + 1;

		this.currentPage$.next(nextIndex);
	}

	private prev() {
		console.log('prev');
		const previousIndex = this.currentPage$.value === 0 ? 0 : this.currentPage$.value - 1;
		this.currentPage$.next(previousIndex);
	}

	private navigateToPage(pageNumber: number) {
		this.currentPage$.next(pageNumber);
	}
}
