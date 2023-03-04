import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForProductsComponent } from './for-products.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MyButtonModule } from 'src/app/core/my-button/my-button.module';

@NgModule({
	declarations: [ForProductsComponent],
	imports: [CommonModule, MatCardModule, MatIconModule, MyButtonModule],
	exports: [ForProductsComponent],
})
export class ForProductsModule {}
