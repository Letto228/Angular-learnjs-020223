import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = of(productsMock[0]);

	// constructor(
	// 	private readonly router: Router,
	// 	private readonly activatedRoute: ActivatedRoute,
	// ) {}

	// navigateToDescriptionTab() {
	// 	// console.log(this.activatedRoute);

	// 	// this.router.navigate(['./description'], {relativeTo: this.activatedRoute});

	// 	const urlTree = this.router.createUrlTree(['./description'], {relativeTo: this.activatedRoute, queryParams: {q: '123'}});

	// 	console.log(urlTree, urlTree.toString());

	// 	this.router.navigateByUrl(urlTree.toString());
	// }
}
