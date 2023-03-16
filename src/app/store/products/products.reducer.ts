import { createReducer, on } from '@ngrx/store';
import { addProducts } from './products.actions';
import { IProductsState } from './products.state';

export const productsInitialState: IProductsState = [];

export const productsReducer = createReducer(
	productsInitialState,
	on(addProducts, (_state: IProductsState, action) => [...action.products]),
);
