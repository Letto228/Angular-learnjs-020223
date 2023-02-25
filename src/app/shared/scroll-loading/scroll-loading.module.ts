import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollLoadingDirective } from './scroll-loading.directive';

@NgModule({
	declarations: [ScrollLoadingDirective],
	imports: [CommonModule],
	exports: [ScrollLoadingDirective],
})
export class ScrollLoadingModule {}
