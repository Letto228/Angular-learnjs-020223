import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectComponent } from './categories-select.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductsListModule } from 'src/app/pages/products-list/products-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [CategoriesSelectComponent],
	imports: [CommonModule, MatButtonModule, MatExpansionModule, RouterModule],
	exports: [CategoriesSelectComponent],
})
export class CategoriesSelectModule {}
