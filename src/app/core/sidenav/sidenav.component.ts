import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChildren,
	QueryList,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements AfterContentInit {
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	@ContentChildren(MatListItem, { read: ViewContainerRef, descendants: true })
	matLists!: QueryList<ViewContainerRef>;

	ngAfterContentInit() {
		this.matLists.changes.subscribe(console.log);
	}

	toggleSidenavOpened() {
		this.matDrawer.toggle();
	}
}
