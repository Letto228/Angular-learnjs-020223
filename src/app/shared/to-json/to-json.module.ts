import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToJsonPipe } from './to-json.pipe';

@NgModule({
	declarations: [ToJsonPipe],
	imports: [CommonModule],
	exports: [ToJsonPipe],
})
export class ToJsonModule {}
