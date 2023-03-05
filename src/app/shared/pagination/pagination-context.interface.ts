export interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[];
	pageCount: Array<number>;
	currentPage: number;
}
