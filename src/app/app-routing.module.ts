import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductModule } from './pages/product/product.module';
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
