import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SliderModule } from '../slider/slider.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [CardComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatGridListModule,
		MatIconModule,
		MatBadgeModule,
		SliderModule,
		MatTooltipModule,
	],
	exports: [CardComponent],
})
export class CardModule {}
