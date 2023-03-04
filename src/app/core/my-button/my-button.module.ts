import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button.component';

@NgModule({
	declarations: [MyButtonComponent],
	imports: [CommonModule],
	exports: [MyButtonComponent],
})
export class MyButtonModule {}
