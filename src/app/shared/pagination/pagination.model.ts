import { TemplateRef } from '@angular/core';

export interface PaginationContext<T> {
	$implicit?: T;
	appPaginationOf: T[];
	ifEmpty?: TemplateRef<PaginationContext<T>>;
	chunkedArr?: Array<T[]>;
	chunk?: T[];
	index: number;
	count?: number;
	controller: {
		next: () => void;
		prev: () => void;
		toItem: (itemIndex: number) => void;
	};
}
