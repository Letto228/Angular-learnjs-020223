import { ToJsonPipe } from './to-json.pipe';

describe('ToJsonPipe', () => {
	it('create an instance', () => {
		const pipe = new ToJsonPipe();
		expect(pipe).toBeTruthy();
	});
});
