import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [DialogContentComponent],
	imports: [CommonModule, MatButtonModule, MatDialogModule],
	exports: [DialogContentComponent],
})
export class DialogContentModule {}
