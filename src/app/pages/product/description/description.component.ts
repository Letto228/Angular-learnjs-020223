import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, map } from 'rxjs';
import { ProductsStoreService } from '../../../shared/products/products-store.service';

@Component({
	selector: 'app-description',
	templateUrl: './description.component.html',
	styleUrls: ['./description.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
	readonly description$ = this.productsStoreService.currentProduct$.pipe(map(product => product?.description));

	constructor(private readonly productsStoreService: ProductsStoreService) {}
}
