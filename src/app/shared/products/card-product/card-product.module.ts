import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardProductComponent } from './card-product.component';

@NgModule({
	declarations: [CardProductComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
	exports: [CardProductComponent],
})
export class CardProductModule {}
