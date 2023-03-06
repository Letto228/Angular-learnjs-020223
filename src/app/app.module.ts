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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { AuthInterceptor } from './shared/auth/auth.interceptor';

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
		// ...HeaderModule.providers,
		// ProductsStoreService,
		// ProductsApiService,
		// {
		// 	provide: BASE_URL,
		// 	useValue: baseUrl,
		// },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: AuthInterceptor,
		// 	multi: true,
		// },
		// {
		// 	provide: 'buttons',
		// 	useValue: ['1', 'Hi']
		// }
		{
			provide: 'name',
			useValue: 'AppModule',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
// AppModuleInjector === RootInjector;

// NullInjector

// |

// PlatformInjector

// |

// RootInjector(AppModuleInjector)

// |											\

// HeaderModuleInjector By lazy HeaderModule		ProductsListModuleInjector By lazy ProductsListModule (CardModule.providers)

// ElementInjectors

// AppElementInjector

// |						\

// HeaderElementInjector		SidenavElementInjector

// 								|

// 								ProductsListElementInjector

// 								|

// 								CardElementInjector [X]('value')
