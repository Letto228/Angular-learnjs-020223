import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';
import { IProductsState, productsEntityAdapter, PRODUCTS_FEATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);
// productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE]

// export const currentProductSelector = createSelector(
// 	productsFeatureSelector,
// 	(productsState: IProductsState) => productsState[0], // cb
// );
// currentProductSelector = (state: IState) => cb(productsFeatureSelector(state))

// const productsEntitiesSelector = createSelector(
// 	productsFeatureSelector,
// 	({entities}: IProductsState) => entities, // cb
// );
// productsEntitiesSelector = (state: IState) => cb(productsFeatureSelector(state))

// const productsIdsSelector = createSelector(
// 	productsFeatureSelector,
// 	({ids}: IProductsState) => ids, // cb
// );
// productsIdsSelector = (state: IState) => cb(productsFeatureSelector(state))

// export const productsSelector = createSelector(
// 	productsEntitiesSelector,
// 	productsIdsSelector,
// 	(entities: IProductsState['entities'], ids: IProductsState['ids']): IProduct[] => ids.map(id => entities[id]) as IProduct[] // cb
// )
// productsSelector = (state: IState) => cb(productsEntitiesSelector(state), productsIdsSelector(state))

// const {selectEntities, selectIds, selectAll} = productsEntityAdapter.getSelectors();

// const productsEntitiesSelector = createSelector(
// 	productsFeatureSelector,
// 	selectEntities,
// );
// // productsEntitiesSelector = (state: IState) => selectEntities(productsFeatureSelector(state))

// const productsIdsSelector = createSelector(
// 	productsFeatureSelector,
// 	selectIds,
// );
// // productsIdsSelector = (state: IState) => selectIds(productsFeatureSelector(state))

// export const productsSelector = createSelector(
// 	productsFeatureSelector,
// 	selectAll,
// )
// // productsIdsSelector = (state: IState) => selectAll(productsFeatureSelector(state))

export const {
	selectEntities: productsEntitiesSelector,
	selectIds: productsIdsSelector,
	selectAll: productsSelector,
} = productsEntityAdapter.getSelectors(productsFeatureSelector);
