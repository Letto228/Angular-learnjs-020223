import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CardProductModule } from 'src/app/shared/products/card-product/card-product.module';
import { productMock } from 'src/app/shared/products/product.mock';

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, CardProductModule],
	exports: [SidenavComponent],
})
export class SidenavModule {
	readonly productMock = productMock;
}
