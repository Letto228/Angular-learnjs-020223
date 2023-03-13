import { TestBed } from '@angular/core/testing';

import { QuestionCanDeactivateGuard } from './question-can-deactivate.guard';

describe('QuestionCanDeactivateGuard', () => {
	let guard: QuestionCanDeactivateGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(QuestionCanDeactivateGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
