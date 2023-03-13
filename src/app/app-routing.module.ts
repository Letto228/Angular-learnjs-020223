import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { QuestionCanActivateGuard } from './shared/test-guard/question-can-activate.guard';
import { QuestionCanLoadGuard } from './shared/test-guard/question-can-load.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list',
		loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
	},
	{
		path: 'product',
		loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
		// canActivate: [QuestionCanActivateGuard],
		// canLoad: [QuestionCanLoadGuard],
		data: {
			acceptedRoles: ['all'],
		},
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
		NotFoundModule, // need move to lazy loading
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
