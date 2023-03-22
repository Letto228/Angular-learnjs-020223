import { createReducer, on } from '@ngrx/store';
import { addProducts } from './products.actions';
import { IProductsState, productsEntityAdapter } from './products.state';

// export const productsInitialState: IProductsState = {
// 	entities: {},
// 	ids: [],
// };
export const productsInitialState: IProductsState = productsEntityAdapter.getInitialState({
	selectedProductId: null,
	productDetails: null,
});

export const productsReducer = createReducer(
	productsInitialState,
	// on(addProducts, (_state: IProductsState, {products}) => ({
	// 	entities: products.reduce(),
	// 	ids: products.map(({_id}) => _id),
	// })),
	on(addProducts, (state: IProductsState, { products }) => productsEntityAdapter.setAll(products, state)),
);
