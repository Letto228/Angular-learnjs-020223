import { FilterByNamePipe } from './filter-by-name.pipe';

describe('filterByNamePipe', () => {
	it('create an instance', () => {
		const pipe = new FilterByNamePipe();
		expect(pipe).toBeTruthy();
	});
});
