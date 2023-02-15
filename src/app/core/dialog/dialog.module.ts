import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogElementsExampleDialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [DialogComponent, DialogElementsExampleDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule],
	exports: [DialogComponent],
})
export class DialogModule {}
