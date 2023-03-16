import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from '../../shared/test-guard/products.resolver';
import { QuestionCanActivateGuard } from '../../shared/test-guard/question-can-activate.guard';
import { QuestionCanDeactivateGuard } from '../../shared/test-guard/question-can-deactivate.guard';
import { DescriptionComponent } from './description/description.component';
import { ProductComponent } from './product.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		children: [
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
			},
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
