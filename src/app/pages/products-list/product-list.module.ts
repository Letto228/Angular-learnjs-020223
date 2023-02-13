import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	declarations: [ProductCardComponent],
	exports: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatListModule, MatProgressBarModule],
})
export class ProductListModule {}
