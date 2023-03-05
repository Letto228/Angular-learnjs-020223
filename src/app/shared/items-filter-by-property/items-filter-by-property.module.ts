import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsFilterByPropertyPipe } from './items-filter-by-property.pipe';

@NgModule({
	declarations: [ItemsFilterByPropertyPipe],
	imports: [CommonModule],
	exports: [ItemsFilterByPropertyPipe],
})
export class ItemsFilterByPropertyModule {}
