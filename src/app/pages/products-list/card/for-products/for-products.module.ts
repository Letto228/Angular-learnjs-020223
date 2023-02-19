import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForProductsComponent } from './for-products.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ForProductsComponent],
	imports: [CommonModule, MatCardModule, MatIconModule],
	exports: [ForProductsComponent],
})
export class ForProductsModule {}
