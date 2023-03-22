import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';
import { isStringValidator } from '../../shared/validators/is-string.validator';
import { loadProducts } from '../../store/products/products.actions';
import { productsSelector } from '../../store/products/products.selector';
import { IState } from '../../store/reducer';

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
			// this.productsStoreService.loadProducts(subCategoryId);
			this.store$.dispatch(loadProducts(subCategoryId));
		}),
		switchMap(() =>
			this.store$.pipe(
				select(productsSelector),
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

	htmlSnippet = this.domSanitazer.bypassSecurityTrustHtml('Template <script>console.log("Hello")</script><b>Tag</b>');

	warningHref = 'javascript:console.log("Hello")';
	safeHref = this.domSanitazer.bypassSecurityTrustUrl('javascript:console.log("Hello")');

	constructor(
		// private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly brandsService: BrandsService,
		private readonly store$: Store<IState>,
		private readonly domSanitazer: DomSanitizer, // private readonly changeDetectorRef: ChangeDetectorRef,
	) {
		// this.store$.pipe(select(currentProductSelector)).subscribe(console.log);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	onCounterChange(value: number) {
		// console.log('onCounterChange', value);
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
