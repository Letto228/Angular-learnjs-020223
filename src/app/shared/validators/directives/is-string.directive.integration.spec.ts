import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IsStringDirective } from './is-string.directive';
import { ValidatorsModule } from './validators.module';

@Component({
	selector: 'app-test',
	template: `<input #input appIsString [ngModel]="search" />`,
})
class TestComponent {
	search = '123';

	@ViewChild('input', { static: true, read: NgModel })
	ngModel!: NgModel;
}

describe('IsStringDirective', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [FormsModule, ValidatorsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Ошибка валидатора при стартовом значении', fakeAsync(() => {
		fixture.detectChanges();

		tick(100);

		const error = component.ngModel.errors;

		expect(error).toEqual({ isString: 'Input valuew not string' });
	}));
});
