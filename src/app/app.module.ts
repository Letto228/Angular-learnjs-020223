import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';
import { ProductListModule } from './pages/products-list/product-list.module';
import { PopupHostComponent } from './core/popup-host/popup-host.component';
import { PopupHostModule } from './core/popup-host/popup-host.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		ProductListModule,
		PopupHostModule,
		MatIconModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
