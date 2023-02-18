import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForProductsComponent } from './for-products.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ForProductsComponent],
	imports: [CommonModule, MatCardModule],
})
export class ForProductsModule {}
