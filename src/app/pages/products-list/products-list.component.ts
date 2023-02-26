import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChildren } from '@angular/core';
import { of } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { CardComponent } from './card/card.component';
import { ScrollLoadingDirection } from '../../shared/app-scroll-with-loading/scroll-loading-direction.enum';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, AfterViewInit {
	products: IProduct[] | undefined = undefined;
	scrollLoading: ScrollLoadingDirection | undefined;

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
		}, 3000);
	}

	ngAfterViewInit() {
		this.cards.changes.subscribe((cards: QueryList<CardComponent>) => {
			cards.forEach(value => {
				//console.log('value', value);
			});
		});
	}

	getProducts(): IProduct[] | undefined {
		return this.products;
	}

	onLoadData(direction: ScrollLoadingDirection | undefined) {
		console.log(direction);
	}

	@ViewChildren('card', { read: CardComponent })
	cards!: QueryList<CardComponent>;

	stream = of(0);
}
