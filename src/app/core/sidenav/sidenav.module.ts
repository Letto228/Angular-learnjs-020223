import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ForProductsModule } from '../../pages/products-list/card/for-products/for-products.module';

@NgModule({
	declarations: [SidenavComponent],
	exports: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, ForProductsModule],
})
export class SidenavModule {}
