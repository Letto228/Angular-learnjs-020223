import { IProduct } from '../../shared/products/product.interface';
import { Dictionary, EntityState, createEntityAdapter } from '@ngrx/entity';

export const PRODUCTS_FEATURE = 'products';

// export interface IProductsState extends Array<IProduct> {}
// export type IProductsState = Array<IProduct>;
// export interface IProductsState {
//     enities: Dictionary<IProduct> // Record<string, IProduct> // {[id: string]: IProduct} ,
//     ids: string[],
// }
export interface IProductsState extends EntityState<IProduct> {
	selectedProductId: string | null;
	productDetails: IProduct | null;
}

export const productsEntityAdapter = createEntityAdapter<IProduct>({
	selectId: ({ _id }: IProduct) => _id,
	sortComparer: ({ name: nameFirst }, { name: nameSecond }): number => {
		if (nameFirst > nameSecond) {
			return 1;
		}

		if (nameFirst < nameSecond) {
			return -1;
		}

		return 0;
	},
});
