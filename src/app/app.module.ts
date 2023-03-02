import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './core/popup-host/popup-host.module';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { ProductsStoreService } from './shared/products/products-store.service';
import { ProductsApiService } from './shared/products/products-api.service';
import { BASE_URL } from './shared/base-url/base-url.token';
import { baseUrl } from './shared/base-url/base-url.const';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
		ProductsListModule,
		InsertShadowModule,
		HttpClientModule,
	],
	providers: [
		// {
		// 	provide: ProductsStoreService, // token
		// 	useClass: ProductsStoreService,
		// },
		ProductsStoreService,
		ProductsApiService,
		// {
		// 	provide: ProductsStoreService,
		// 	useFactory: () => new ProductsStoreService(),
		// },

		{
			provide: 'name',
			useValue: 'AppModule',
			// multi: true,
		},
		// {
		// 	provide: 'name',
		// 	useFactory: () => 'AppModule',
		// 	// multi: true,
		// },

		// {
		// 	provide: 'name',
		// 	useValue: 'AppComponent',
		// 	// multi: true,
		// },

		// {
		// 	provide: 'ProductsStoreService', // token
		// 	useExisting: ProductsStoreService, // token
		// },
		// {
		// 	provide: 'ProductsStoreService',
		// 	useFactory: (productsStoreServiceInstance: ProductsStoreService) => productsStoreServiceInstance,
		// 	deps: [ProductsStoreService], // tokens
		// }
		{
			provide: BASE_URL,
			useValue: baseUrl,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
