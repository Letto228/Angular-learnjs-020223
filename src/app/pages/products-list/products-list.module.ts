import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LetModule } from '../../shared/let/let.module';
import { ScrollWithLoadingModule } from '../../shared/scroll-with-loading/scroll-with-loading.module';
import { MatIconModule } from '@angular/material/icon';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		CardModule,
		DumpNgIfModule,
		MatProgressSpinnerModule,
		LetModule,
		ScrollWithLoadingModule,
		MatIconModule,
		PaginationModule,
		MatButtonModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
