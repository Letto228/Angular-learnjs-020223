import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	@Input()
	isOpened = true;

	@Output()
	isOpenedChange = new EventEmitter<boolean>();

	toggleSidenavOpened() {
		this.isOpenedChange.emit(!this.isOpened);
	}
}
