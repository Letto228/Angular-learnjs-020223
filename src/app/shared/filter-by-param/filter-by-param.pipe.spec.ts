import { productsMock } from '../products/products.mock';
import { FilterByParamPipe } from './filter-by-param.pipe';

describe('FilterByParamPipe', () => {
	const pipe = new FilterByParamPipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});
	it('фильтрация по имени', () => {
		const result = pipe.transform(productsMock, productsMock[0].name, 'name');

		expect(result).toEqual([productsMock[0]]);
	});
	it('фильтрация по id - не найдено', () => {
		const result = pipe.transform(productsMock, 'not-found', '_id');

		expect(result).toEqual([]);
	});
});
