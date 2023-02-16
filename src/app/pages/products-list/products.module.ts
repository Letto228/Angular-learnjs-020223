import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductCardComponent],
	exports: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ProductsModule {}
