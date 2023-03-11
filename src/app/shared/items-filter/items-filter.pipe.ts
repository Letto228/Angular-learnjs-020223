import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemsFilter',
	pure: true,
})
export class ItemsFilterPipe implements PipeTransform {
	transform<T extends object>(items: T[], argName: string, argValue: unknown): T[] {
		if (!argName || !argValue) {
			return items;
		}
		return items.filter(item => {
			if (Object.hasOwn(item, argName)) {
				const value = Object.getOwnPropertyDescriptor(item, argName)?.value;

				if (typeof value === 'string') {
					return value.toLowerCase().includes((argValue as string).toLowerCase());
				} else if (typeof value === 'number') {
					return value >= (argValue as number);
				} else {
					return value === argValue;
				}
			}
			return false;
		});
	}
}
