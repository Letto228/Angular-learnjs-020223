import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { CustomPreloading } from './shared/custom-preloading/custom-preloading';

const routes: Routes = [
	{
		path: '', // путь сост из одного сегмента
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list', // путь сост из одного сегмента
		// component: ProductsListComponent,
		loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
	},
	{
		// path: 'product/:id', // путь сост из двуч сегментов
		path: 'product', // путь сост из двуч сегментов
		loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
		data: {
			needPreload: true,
		},
		// component: ProductComponent,
		// children: [
		// 	{
		// 		path: 'type',
		// 		component: TypeComponent,
		// 	},
		// 	{
		// 		path: 'description',
		// 		component: DescriptionComponent,
		// 	},
		// 	{
		// 		path: '',
		// 		redirectTo: 'description',
		// 		pathMatch: 'full',
		// 	},
		// ],
	},
	// {
	// 	path: 'root/:productId',
	// 	redirectTo: 'product/:productId'
	// },
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), NotFoundModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
