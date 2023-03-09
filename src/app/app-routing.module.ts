import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { DescriptionComponent } from './pages/product/description/description.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductModule } from './pages/product/product.module';
import { TypeComponent } from './pages/product/type/type.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsListModule } from './pages/products-list/products-list.module';

const routes: Routes = [
	{
		path: '', // путь сост из одного сегмента
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list', // путь сост из одного сегмента
		component: ProductsListComponent,
	},
	{
		path: 'product/id', // путь сост из двуч сегментов
		component: ProductComponent,
		children: [
			{
				path: 'type',
				component: TypeComponent,
			},
			// product/id/description -> product/id/type
			// {
			// 	path: 'description',
			// 	redirectTo: 'type',
			// 	pathMatch: 'full',
			// },
			{
				path: 'description',
				component: DescriptionComponent,
				// children: [
				// 	{
				// 		path: 'child-1',
				// 		component: DescriptionComponent,
				// 	},
				// 	{
				// 		path: 'child-2',
				// 		component: TypeComponent,
				// 	},
				// 	// {
				// 	// 	path: '',
				// 	// 	redirectTo: '../type',
				// 	// 	pathMatch: 'full',
				// 	// }
				// ]
			},
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
		],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes), ProductsListModule, ProductModule, NotFoundModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
