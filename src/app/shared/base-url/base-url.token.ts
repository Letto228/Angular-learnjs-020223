import { InjectionToken } from '@angular/core';
import { baseUrl } from './base-url.const';

export const BASE_URL = new InjectionToken('Base url token', {
	providedIn: 'root',
	factory: () => baseUrl,
});
