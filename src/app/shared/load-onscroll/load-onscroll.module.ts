import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnscrollDirective } from './load-onscroll.directive';

@NgModule({
	declarations: [LoadOnscrollDirective],
	imports: [CommonModule],
	exports: [LoadOnscrollDirective],
})
export class LoadOnscrollModule {}
