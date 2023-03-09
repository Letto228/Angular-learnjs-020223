export function productGroupPicker<T>(countProductOnPage: number, productList: T[]): Array<T[]> {
	const productGroup: T[][] = [];
	const repeat = Math.ceil(productList.length / countProductOnPage);
	const arrayOnWorking = [...productList];

	for (let i = 0; i < repeat; i++) {
		productGroup.push(arrayOnWorking.splice(0, countProductOnPage));
	}

	return productGroup;
}
