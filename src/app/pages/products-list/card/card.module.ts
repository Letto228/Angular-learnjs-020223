import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from '../../../shared/carousel/carousel.module';
import { PaginationModule } from '../../../shared/pagination/pagination.module';

@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule, PaginationModule],
	exports: [CardComponent],
})
export class CardModule {}
