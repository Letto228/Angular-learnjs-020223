import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	// readonly products$ = this.activatedRoute.data.pipe(
	// 	map<Data, IProduct[]>(data => data['products']),
	// )
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subCategoryId')),
		tap(subCategoryId => {
			this.productsStoreService.loadProducts(subCategoryId);
		}),
		switchMap(() => this.productsStoreService.products$),
	);
	readonly brands$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.brandsService.loadBrands(id);
		}),
		switchMap(() => this.brandsService.brands$),
	);

	searchValue = '';

	inputControl = new FormControl('');
	counterControl = new FormControl(100);

	readonly searchValue$ = this.inputControl.valueChanges.pipe(
		debounceTime(300),
		startWith(this.inputControl.value),
		distinctUntilChanged(),
		// tap(value => {
		// 	console.log('searchValue$', value);
		// })
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly brandsService: BrandsService,
	) {
		// console.log(this.activatedRoute.snapshot.data);
		// this.productsStoreService.products$.subscribe(value => {
		// 	console.log('component', value);
		// });
	}

	// ngOnInit() {
	// this.inputControl.valueChanges.subscribe(console.log);
	// this.counterControl.valueChanges.subscribe(console.log);

	// setTimeout(() => {
	// 	this.counterControl.setValue(400);
	// }, 3000)
	// }

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	onCounterChange(value: number) {
		console.log('onCounterChange', value);
	}
}
