import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductsState, PRODUCTS_FEATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);
// productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE]

export const currentProductSelector = createSelector(
	productsFeatureSelector,
	(productsState: IProductsState) => productsState[0], // cb
);
// currentProductSelector = (state: IState) => cb(productsFeatureSelector(state))
