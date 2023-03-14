import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsListComponent,
	},
	{
		path: 'categories/:categoryId',
		component: ProductsListComponent,
	},
	{
		path: 'categories',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsListRoutingModule {}
