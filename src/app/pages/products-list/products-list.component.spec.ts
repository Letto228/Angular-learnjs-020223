import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsListComponent } from './products-list.component';
import { ProductsListModule } from './products-list.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandsService } from '../../shared/brands/brands.service';
import { of, take } from 'rxjs';
import { productsSelector } from '../../store/products/products.selector';
import { productsMock } from '../../shared/products/products.mock';
import { MemoizedSelector } from '@ngrx/store';
import { IState } from '../../store/reducer';
import { IProduct } from '../../shared/products/product.interface';
import { loadProducts } from '../../store/products/products.actions';

describe('ProductsListComponent', () => {
	let fixture: ComponentFixture<ProductsListComponent>;
	let component: ProductsListComponent;
	let mockStore: MockStore;
	let dispatchSpy: jasmine.Spy;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [
				provideMockStore(),
				{
					provide: BrandsService,
					useValue: {
						brands$: of([]),
						// eslint-disable-next-line
						loadBrands(_subCategoryId?: string | null) {},
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		mockStore = TestBed.inject(MockStore);

		mockStore.overrideSelector(productsSelector as MemoizedSelector<IState, IProduct[]>, productsMock);

		dispatchSpy = spyOn(mockStore, 'dispatch');

		fixture = TestBed.createComponent(ProductsListComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Загрузка продуктов', done => {
		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

		component.products$.pipe(take(1)).subscribe({
			next: products => {
				expect(products).toEqual(productsMock);
			},
			complete: () => {
				done();
			},
		});
	});
});
