import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Клик по меню', () => {
		const menuClickEmitSpy = spyOn(component.menuClick, 'emit');
		const trigerEvent = new Event('click');
		const debugElement = fixture.debugElement;
		const menuButtonElement = debugElement.query(By.css('[test-id="header-button-menu"]'));

		expect(menuClickEmitSpy).not.toHaveBeenCalled();

		menuButtonElement.triggerEventHandler('click', trigerEvent);

		expect(menuClickEmitSpy).toHaveBeenCalled();
	});
});
