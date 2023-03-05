import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LetModule } from '../../shared/let/let.module';
import { ScrollWithLoadingModule } from '../../shared/scroll-with-loading/scroll-with-loading.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToJsonModule } from '../../shared/to-json/to-json.module';
import { ItemsFilterByPropertyModule } from '../../shared/items-filter-by-property/items-filter-by-property.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		CardModule,
		DumpNgIfModule,
		MatProgressSpinnerModule,
		LetModule,
		ScrollWithLoadingModule,
		PaginationModule,
		MatIconModule,
		MatButtonModule,
		ToJsonModule,
		ItemsFilterByPropertyModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
