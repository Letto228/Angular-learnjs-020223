import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PopupHostComponent } from './popup-host.component';

@NgModule({
	declarations: [PopupHostComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
	exports: [PopupHostComponent],
})
export class PopupHostModule {}
