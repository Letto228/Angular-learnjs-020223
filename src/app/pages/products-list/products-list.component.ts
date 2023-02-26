import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { CardComponent } from './card/card.component';
import { ScrollDirection } from '../../shared/scroll-load/scroll-load.model';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] = [];
	protected distance = 200;
	private scopeNumber = 1;

	ngOnInit() {
		setTimeout(() => {
			this.products = this.prepareProduct();
		}, 0);
	}

	private prepareProduct() {
		// чтобы визуально отслеживать подгрузку проще было
		// в заголовки номер пачки добавляется
		return productsMock.map(el => {
			return { ...el, name: `${this.scopeNumber} -  ${el.name}` };
		});
	}
	getProducts(): IProduct[] | undefined {
		return this.products;
	}

	onLoadData(direction: ScrollDirection) {
		console.log('DIRECTION', direction);

		if (direction === ScrollDirection.down) {
			++this.scopeNumber;
			const newItems = this.prepareProduct();
			this.products = [...this.products, ...newItems];
		}

		// На ScrollDirection.up ничего не происходит,
		// тк не было задачи сделать уничтожение прокрученных карточек
		// а так можно повесить подгрузку предыдущих элементов с бэка
	}

	@ViewChildren('card', { read: CardComponent })
	cards!: QueryList<CardComponent>;
}
