import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsFilterPipe } from './items-filter.pipe';

@NgModule({
	declarations: [ItemsFilterPipe],
	imports: [CommonModule],
	exports: [ItemsFilterPipe],
})
export class ItemsFilterModule {}
