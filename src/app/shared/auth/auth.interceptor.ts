import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders,
	HttpErrorResponse,
} from '@angular/common/http';
import { catchError, NEVER, Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const newRequest = request.clone({
			headers: new HttpHeaders({ auth: 'Auth test' }),
		});

		return next.handle(newRequest).pipe(
			catchError(({ error }: HttpErrorResponse): Observable<HttpEvent<unknown>> => {
				if (error === '401') {
					// перезапрашиваем токен;
				}

				console.log(error);

				return NEVER;
			}),
		);
	}
}
