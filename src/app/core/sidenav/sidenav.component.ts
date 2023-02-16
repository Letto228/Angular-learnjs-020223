import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	ContentChild,
	DoCheck,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	Pipe,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { of, Subscription } from 'rxjs';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
// export class SidenavComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class SidenavComponent {
	// @Input()
	// isOpened = true;

	@Input()
	navigationTemplate: TemplateRef<unknown> | undefined;

	// @Output()
	// isOpenedChange = new EventEmitter<boolean>();

	// @ViewChild('drawer')
	// private drawerComponent!: MatDrawer;
	// @ViewChild(MatDrawer, {static: false})
	// private matDrawerComponent: MatDrawer | undefined;
	@ViewChild(MatDrawer, { static: false })
	private matDrawerComponent!: MatDrawer;
	// @ViewChild(MatDrawer, {read: ElementRef})
	// private matDrawerElement!: ElementRef<HTMLElement>;
	// @ViewChild('inputElement')
	// private inputElement!: ElementRef<HTMLInputElement>;
	@ContentChild('inputElement', { static: true, descendants: false })
	private inputElement!: ElementRef<HTMLInputElement>;
	@ContentChild('div', { static: true, descendants: false })
	private divElement!: ElementRef<HTMLInputElement>;
	// @ContentChild('navigationTemplate', {static: true, read: TemplateRef})
	// private navigationTemplateFromContent!: TemplateRef<unknown>;
	// @ViewChild('inputElement', {read: MatDrawer})
	// private inputNgModel!: MatDrawer;
	@ViewChild('viewport', { static: true, read: ViewContainerRef })
	private viewportContainer!: ViewContainerRef;
	// @ViewChild('viewport', {static: true})
	// private viewportContainerT!: ViewContainerRef;

	// @Input()
	// text: string | undefined;
	// @Input()
	// size: string | undefined;

	user$ = of({ name: 'Egor' });
	uns!: Subscription;

	ngOnChanges({ navigationTemplate }: SimpleChanges) {
		if (navigationTemplate) {
			this.insertNavigationTemplate(this.navigationTemplate);
			this.insertNavigationTemplate(this.navigationTemplate);
		}
		// 	// text.currentValue === this.text;
		// 	if (text) {
		// 		// ...
		// 	}
		// 	if (size) {
		// 		// ...
		// 	}
	}

	ngOnInit() {
		// console.log(this.viewportContainerT);
		console.log(this.inputElement);
		console.log(this.divElement);
		this.uns = this.user$.subscribe(user => {
			// console.log(user);
		});
	}

	// ngDoCheck() {

	// }

	// ngAfterContentInit() {
	// console.log(this.inputElement);
	// console.log('ngAfterContentInit')
	// }

	// ngAfterContentChecked() {
	// console.log('ngAfterContentChecked')
	// }

	// ngAfterViewInit() {
	// console.log(this.matDrawerComponent);
	// }

	// ngAfterViewChecked() {

	// }

	// ngOnDestroy() {
	// this.uns.unsubscribe();
	// }

	toggleSidenavOpened() {
		// this.drawerComponent.toggle();
		this.matDrawerComponent?.toggle();

		// console.log(this.matDrawerElement.nativeElement);

		// console.log(this.inputElement);
		// console.log(this.inputNgModel);

		// this.isOpenedChange.emit(this.drawerComponent.opened);
	}

	private insertNavigationTemplate(template: TemplateRef<unknown> | undefined) {
		this.viewportContainer.clear();

		if (!template) {
			return;
		}

		this.viewportContainer.createEmbeddedView(template);
	}
}
