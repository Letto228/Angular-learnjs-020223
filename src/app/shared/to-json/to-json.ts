export function toJson<T extends object>(value: T): string {
	return JSON.stringify(value);
}
