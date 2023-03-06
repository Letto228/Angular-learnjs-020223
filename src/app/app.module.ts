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
import { HttpClientModule } from '@angular/common/http';

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
		ProductsStoreService,
		ProductsApiService,
		{
			provide: BASE_URL,
			useValue: baseUrl,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
