import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { ICarouselContext } from './carousel-context.interface';

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnChanges, OnInit {
	@Input() appCarouselOf: T[] | undefined;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<ICarouselContext<T>>,
	) {}

	ngOnChanges({ appCarouselOf }: SimpleChanges) {
		if (appCarouselOf) {
			this.updateView();
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	private updateView() {
		if (!this.appCarouselOf?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				// filter(context => Boolean(context)),
				filter(Boolean),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentIndex: number): ICarouselContext<T> | null {
		if (!this.appCarouselOf?.length) {
			return null;
		}

		return {
			$implicit: this.appCarouselOf[currentIndex],
			appCarouselOf: this.appCarouselOf,
			// next: this.next.bind(this),
			next: () => {
				this.next();
			},
			previous: () => {
				this.previous();
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < (this.appCarouselOf as T[]).length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private previous() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : (this.appCarouselOf as T[]).length - 1;

		this.currentIndex$.next(newIndex);
	}
}
