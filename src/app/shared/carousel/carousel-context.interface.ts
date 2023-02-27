export interface ICarouselContext<T> {
	$implicit: T;
	appCarouselOf: T[];
	next: () => void;
	previous: () => void;
}
