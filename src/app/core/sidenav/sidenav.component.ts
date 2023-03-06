import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		// {
		// 	provide: 'name',
		// 	useValue: 'SidenavComponent',
		// }
	],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	toggleSidenavOpened() {
		this.matDrawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
