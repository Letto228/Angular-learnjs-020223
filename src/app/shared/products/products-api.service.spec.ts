import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of, take } from 'rxjs';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';
import { productsMock } from './products.mock';

// const mockHttpClient = {
// 	get<T>(_url: string) {},
// } as HttpClient

describe('ProductsApiService', () => {
	let service: ProductsApiService;
	let mockHttp: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				ProductsApiService,
				// {
				// 	provide: HttpClient,
				// 	useValue: mockHttpClient,
				// }
			],
		});
	});

	beforeEach(() => {
		service = TestBed.inject(ProductsApiService);
		mockHttp = TestBed.inject(HttpTestingController);

		// spyOn(mockHttpClient, 'get').and.returnValue(of({data: {items: productsMock}}))
	});

	it('Зарузка продуктов', done => {
		service.getProducts$().subscribe({
			next: products => {
				expect(products).toEqual(productsMock);
			},
			complete: done,
		});

		mockHttp.expectOne('/products').flush({ data: { items: productsMock } });
	});
});
