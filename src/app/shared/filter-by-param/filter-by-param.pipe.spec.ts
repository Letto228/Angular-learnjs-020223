import { productsMock } from '../products/products.mock';
import { FilterByParamPipe } from './filter-by-param.pipe';

describe('FilterByParamPipe', () => {
	const pipe = new FilterByParamPipe();

	// describe('', () => {
	//     it('', () => {

	//     })
	// })

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('Фильтрация по имени', () => {
		const transformValue = pipe.transform(productsMock, productsMock[0].name, 'name');

		expect(transformValue).toEqual([productsMock[0]]);
	});

	it('Фильтрация по id', () => {
		const transformValue = pipe.transform(productsMock, productsMock[2]._id, '_id');

		expect(transformValue).toEqual([productsMock[2]]);
	});

	it('Фильтрация по id (не существующий id)', () => {
		const transformValue = pipe.transform(productsMock, 'not-dound-id', '_id');

		expect(transformValue).toEqual([]);
	});
});
