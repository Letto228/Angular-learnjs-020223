import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from 'src/app/core/pagination/pagination.module';

@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, PaginationModule],
	exports: [CardComponent],
})
export class CardModule {}
