import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlessScrollDirective } from './endless-scroll.directive';

@NgModule({
	declarations: [EndlessScrollDirective],
	imports: [CommonModule],
	exports: [EndlessScrollDirective],
})
export class EndlessScrollModule {}
