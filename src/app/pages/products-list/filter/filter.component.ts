import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IProductsFilter } from './products-filter.interface';
import { Observable, map, takeUntil } from 'rxjs';
import { DestroyService } from '../../../shared/destroy/destroy.service';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class FilterComponent implements OnInit, OnChanges {
	readonly filterForm = this.formBuilder.group({
		name: ['', { validators: [Validators.minLength(3)] }],
		brands: this.formBuilder.array<boolean>([]),
		priceRange: this.formBuilder.group({
			min: -1,
			max: 0,
		}),
	});

	@Input() brands!: string[] | null;
	@Input() initialFilter!: IProductsFilter;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();

	// Output by stream
	// @Output() changeFilter = this.getFilterStream$();

	// readonly filterForm = new FormGroup({
	// 	name: new FormControl('', {validators: [Validators.minLength(3)]}),
	// 	brands: new FormArray([]),
	// 	priceRange: new FormGroup({
	// 		min: new FormControl(-1),
	// 		max: new FormControl(0),
	// 	})
	// });

	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly destroy$: DestroyService, // private readonly formGroupName: FormGroupName,
	) {
		// this.formGroupName.control
		// this.filterForm.valueChanges.subscribe(formValue => {
		// 	const { brands, ...otherValues } = formValue;
		// 	// console.log({
		// 	// 	...otherValues,
		// 	// 	brands: this.getPrandsList(brands as boolean[]),
		// 	// })
		// 	// this.changeFilter.emit()
		// });
		// this.filterForm.get('name')?.valueChanges.subscribe(console.log);
	}

	get nameControl(): FormControl {
		return this.filterForm.get('name') as FormControl;
	}

	ngOnChanges({ brands }: SimpleChanges): void {
		if (brands) {
			const initialFilterBrands = this.initialFilter.brands;
			const brandsControls = this.brands
				? this.brands.map(name => this.formBuilder.control(initialFilterBrands.includes(name)))
				: [];
			const newBrandsFormArray = this.formBuilder.array(brandsControls);

			this.filterForm.setControl('brands', newBrandsFormArray);
		}
	}

	ngOnInit() {
		this.initFilterValue();
		this.listenChangeFilterForm();
	}

	onSubmit(formValue: unknown) {
		// console.log(formValue);
	}

	private initFilterValue() {
		const { name, priceRange } = this.initialFilter;

		this.filterForm.patchValue({ name, priceRange });
	}

	private listenChangeFilterForm() {
		this.filterForm.valueChanges
			.pipe(
				map(
					({ brands, ...otherValues }) =>
						({
							...otherValues,
							brands: this.getPrandsList(brands as boolean[]),
						} as IProductsFilter),
				),
				takeUntil(this.destroy$),
			)
			.subscribe(filter => {
				this.changeFilter.emit(filter);
			});
	}

	// Output by stream
	// private getFilterStream$(): Observable<IProductsFilter> {
	// 	return this.filterForm.valueChanges
	// 		.pipe(
	// 			map(({ brands, ...otherValues }) => ({
	// 				...otherValues,
	// 				brands: this.getPrandsList(brands as boolean[]),
	// 			}) as IProductsFilter),
	// 			takeUntil(this.destroy$)
	// 		)
	// }

	private getPrandsList(brandsActiveFlags: boolean[]): IProductsFilter['brands'] {
		if (!this.brands) {
			return [];
		}

		return this.brands.filter((_, index) => brandsActiveFlags[index]);
	}
}
