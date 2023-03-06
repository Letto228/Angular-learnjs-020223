import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByParamPipe } from './filter-by-param.pipe';

@NgModule({
	declarations: [FilterByParamPipe],
	imports: [CommonModule],
	exports: [FilterByParamPipe],
})
export class FilterByParamModule {}
