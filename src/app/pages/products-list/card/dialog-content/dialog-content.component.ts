import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-dialog-content',
	templateUrl: './dialog-content.component.html',
	styleUrls: ['./dialog-content.component.css'],
})
export class DialogContentComponent {
	constructor(public dialogRef: MatDialogRef<DialogContentComponent>) {}

	closeDialog() {
		this.dialogRef.close('Pizza!');
	}
}
