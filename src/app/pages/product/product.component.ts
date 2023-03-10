import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, of, switchMap, tap } from 'rxjs';
import { productsMock } from '../../shared/products/products.mock';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	// readonly product$ = of(productsMock[0]);
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('id')),
		filter(Boolean),
		tap(id => {
			this.productsStoreService.loadProduct(id);
		}),
		switchMap(() => this.productsStoreService.currentProduct$),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute, // private readonly router: Router,
	) {}
	// constructor(
	// private readonly router: Router,
	// 	private readonly activatedRoute: ActivatedRoute,
	// ) {}

	// ngOnInit() {
	// 	console.log(this.activatedRoute.snapshot.params['id']);

	// 	setTimeout(() => {
	// 		this.router.navigate(
	// 			['/product', 'gejmpad-microsoft-xbox-one-sports-blue-special-edition-sinij'],
	// 		)
	// 	},3000)
	// }

	// navigateToDescriptionTab() {
	// 	// console.log(this.activatedRoute);

	// 	// this.router.navigate(['./description'], {relativeTo: this.activatedRoute});

	// 	const urlTree = this.router.createUrlTree(['./description'], {relativeTo: this.activatedRoute, queryParams: {q: '123'}});

	// 	console.log(urlTree, urlTree.toString());

	// 	this.router.navigateByUrl(urlTree.toString());
	// }
}
