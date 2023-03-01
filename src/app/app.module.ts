import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';
import { CardModule } from './pages/products-list/card/card.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './shared/popup-host/popup-host.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		CardModule,
		MatListModule,
		PopupHostModule,
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
