export interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[];
	appPaginationCount: number;
	index: number;
	pageIndexes: number[];
	selectedIndex: (index: number) => void;
	next: () => void;
	previous: () => void;
}
