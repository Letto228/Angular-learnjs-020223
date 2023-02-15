import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [SliderComponent],
	imports: [CommonModule, MatTooltipModule],
	exports: [SliderComponent],
})
export class SliderModule {}
