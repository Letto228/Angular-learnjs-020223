import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollLoadModule } from '../../shared/scroll-load/scroll-load.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, CardModule, DumpNgIfModule, MatProgressSpinnerModule, ScrollLoadModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
