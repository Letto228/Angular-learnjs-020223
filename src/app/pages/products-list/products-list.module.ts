import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LetModule } from '../../shared/let/let.module';
import { EndlessScrollModule } from 'src/app/shared/endless-scroll/endless-scroll.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, CardModule, DumpNgIfModule, MatProgressSpinnerModule, LetModule, EndlessScrollModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
