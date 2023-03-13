import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollWithLoadingModule } from '../../shared/scroll-with-loading/scroll-with-loading.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterByParamModule } from '../../shared/filter-by-param/filter-by-param.module';
import { RouterModule } from '@angular/router';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { FilterModule } from './filter/filter.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		CardModule,
		MatProgressSpinnerModule,
		ScrollWithLoadingModule,
		PaginationModule,
		MatIconModule,
		MatButtonModule,
		FilterByParamModule,
		RouterModule,
		ProductsListRoutingModule,
		FilterModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
