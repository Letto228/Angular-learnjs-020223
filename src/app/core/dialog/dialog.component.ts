import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
	constructor(public dialog: MatDialog) {}

	@Output()
	isBuyed = new EventEmitter<boolean>();

	openDialog() {
		this.dialog.open(DialogElementsExampleDialogComponent);
		this.isBuyed.emit(true);
	}
}

@Component({
	selector: 'app-dialog-elements-example-dialog',
	templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialogComponent {}
