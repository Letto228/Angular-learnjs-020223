import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from 'src/app/pages/products-list/products-list.component';

const routes: Routes = [
	{
		path: '/products-list/categories',
		component: ProductsListComponent,
		children: [
			{
				path: ':categoryId',
				component: ProductsListComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoriesSelectRoutingModule {}
