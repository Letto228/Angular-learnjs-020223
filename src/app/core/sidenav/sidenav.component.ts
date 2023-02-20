import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	toggleSidenavOpened() {
		this.matDrawer.toggle();
	}
}
