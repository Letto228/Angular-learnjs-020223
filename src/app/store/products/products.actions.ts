import { createAction } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';

export enum ProductsActionTypes {
	AddProducts = '[Products] Add products',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: IProduct[]) => ({ products }));

// addProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}

// export class AddProducts {
//     readonly type = ProductsActionTypes.AddProducts;

//     // products: IProduct[]

//     constructor(readonly products: IProduct[]) {
//         // this.products = products
//     }
// }

// new AddProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}
