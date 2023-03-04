import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForProductsComponent } from './for-products.component';

describe('ForProductsComponent', () => {
	let component: ForProductsComponent;
	let fixture: ComponentFixture<ForProductsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ForProductsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ForProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
