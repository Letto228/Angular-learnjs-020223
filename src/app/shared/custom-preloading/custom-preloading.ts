import { Inject, Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, Subject } from 'rxjs';

const preload$ = new Subject<string>();

setTimeout(() => {
	preload$.next('product');
}, 3000);

@Injectable({
	providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		console.log(route);

		return preload$.pipe(mergeMap(path => (route.path === path ? load() : of(null))));
	}
}
// export class CustomPreloading implements PreloadingStrategy {
//     preload(route: Route, load: () => Observable<any>): Observable<any> {
//         console.log(route);

//         if (!route.data?.['needPreload']) {
//             return of(null);
//         }

//         return load();
//     }
// }
