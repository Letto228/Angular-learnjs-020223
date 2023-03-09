export interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[];
	pageIndexes: Array<number>;
	currentPage: number;
}
