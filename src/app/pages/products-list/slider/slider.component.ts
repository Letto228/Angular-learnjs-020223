import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IProductImage } from '../../../shared/products/product-image.interface';

//ToDO потом тут будет нормальный слайдер
@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class SliderComponent implements OnInit {
	@Input() list?: IProductImage[] = [];

	first: IProductImage | undefined;
	rest: IProductImage[] | undefined;

	// Не уверенна, что так правильно, но пока пусть так
	ngOnInit() {
		if (this.list) {
			const [first, ...rest] = this.list;
			this.first = first;
			this.rest = rest;
		}
	}
}
