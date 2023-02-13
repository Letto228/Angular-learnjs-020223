import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
	@Input() public products: IProduct;

	@Output() public buyProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

	public path: string;

	public buyBtn() {
		if (this.products) {
			this.buyProduct.emit(this.products);
		}
	}

	public ngOnInit() {
		this.path = this.products?.images[1].url;
	}

	longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
