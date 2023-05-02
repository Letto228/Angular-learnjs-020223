import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, take, tap } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';
import { isStringValidator } from '../../shared/validators/is-string.validator';
import { currentProductSelector } from '../../store/products/products.selector';
import { IState } from '../../store/reducer';
import { IProductsFilter } from './filter/products-filter.interface';
import { IProductsFilterQueryParams } from './filter/query-params/products-filter-query-params.interface';
import { getQueryFromFilter } from './filter/query-params/get-query-from-filter';
import { getFilterFromQuery } from './filter/query-params/get-filter-from-query';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subCategoryId')),
		tap(subCategoryId => {
			this.productsStoreService.loadProducts(subCategoryId);
		}),
		switchMap(() =>
			this.store$.pipe(
				select(state => state.products),
				// map(state => state.products),
				// distinctUntilChanged()
			),
		),
	);
	readonly brands$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.brandsService.loadBrands(id);
		}),
		switchMap(() => this.brandsService.brands$),
	);
	readonly initialFilter$ = this.activatedRoute.queryParams.pipe(
		take(1),
		map(queryParams => getFilterFromQuery(queryParams as IProductsFilterQueryParams)),
	);

	searchValue = '';

	readonly inputControl = new FormControl(
		{ value: '', disabled: false },
		{
			validators: [Validators.required, Validators.minLength(3)],
			// asyncValidators: [this.isStringAsyncValidator.bind(this)],
		},
	);

	readonly searchValue$ = this.inputControl.valueChanges.pipe(
		debounceTime(300),
		startWith(this.inputControl.value),
		distinctUntilChanged(),
	);
	readonly controlErrors$ = this.inputControl.statusChanges.pipe(
		map(status => (status === 'INVALID' ? this.inputControl.errors : null)),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly router: Router,
		private readonly brandsService: BrandsService,
		private readonly store$: Store<IState>, // private readonly changeDetectorRef: ChangeDetectorRef,
	) {
		// setTimeout(() => {
		// 	this.inputControl.enable();
		// }, 2000);
		this.store$.pipe(select(currentProductSelector)).subscribe(console.log);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	onCounterChange(value: number) {
		// console.log('onCounterChange', value);
	}

	onFilterChange(filter: IProductsFilter) {
		this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: getQueryFromFilter(filter) });
	}

	private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
		console.log('Start async');
		return isStringAsyncValidator(control)
			.pipe
			// tap(() => {
			// 	this.changeDetectorRef.markForCheck();
			// }),
			();
	}
}
