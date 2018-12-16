import convertStylesheet, { StylesheetUnit } from './convertStylesheet';

describe('convertStylesheet()', () => {

	let stylesheet: string;
	beforeAll(() => {
		stylesheet = `
			.foo {
				font: 18px/1.5 "Helvetica Neue";
				margin: 8px 16px -6px -32px;
				border: 2px solid red;
				padding: 0.50px 0.94px 25% 60vh;
				position: absolute;
				left: .5px;
				right: -.561px;
			}
		`;
	});

	test(`Converts pixel values to EMs with precision of 4 digits`, () => {
		const expected = `
			.foo {
				font: 1.125em/1.5 "Helvetica Neue";
				margin: 0.5em 1em -0.375em -2em;
				border: 0.125em solid red;
				padding: 0.0313em 0.0587em 25% 60vh;
				position: absolute;
				left: 0.0313em;
				right: -0.0351em;
			}
		`;
		expect(convertStylesheet(stylesheet)).toBe(expected);
	});

	test(`Converts pixel values to REMs with precision of 4 digits`, () => {
		const expected = `
			.foo {
				font: 0.5625rem/1.5 "Helvetica Neue";
				margin: 0.25rem 0.5rem -0.1875rem -1rem;
				border: 0.0625rem solid red;
				padding: 0.0156rem 0.0294rem 25% 60vh;
				position: absolute;
				left: 0.0156rem;
				right: -0.0175rem;
			}
		`;
		expect(
			convertStylesheet(
				stylesheet, 
				false, 
				StylesheetUnit.rem, 
				32)
		).toBe(expected);
		expect(
			convertStylesheet(
				stylesheet, 
				false, 
				StylesheetUnit.rem, 
				32,
				[])
		).toBe(expected);
	});

	test(`Only selected props are affected`, () => {
		const expected = `
			.foo {
				font: 18px/1.5 "Helvetica Neue";
				margin: 0.5em 1em -0.375em -2em;
				border: 2px solid red;
				padding: 0.0313em 0.0587em 25% 60vh;
				position: absolute;
				left: .5px;
				right: -.561px;
			}
		`;
		expect(
			convertStylesheet(
				stylesheet, 
				false, 
				StylesheetUnit.em, 
				16, 
				'margin        ,   padding'.split(','))
		).toBe(expected);
		expect(
			convertStylesheet(
				stylesheet, 
				false, 
				StylesheetUnit.em, 
				16, 
				['margin', 'padding'])
		).toBe(expected);
	});

	test(`Includes preservation comments for converted pixel values`, () => {
		const expected = `
			.foo {
				font: 1.125em/1.5 /* 18px */ "Helvetica Neue";
				margin: 0.5em 1em -0.375em -2em; /* 8px 16px -6px -32px */
				border: 0.125em /* 2px */ solid red;
				padding: 0.0313em 0.0587em 25% 60vh; /* 0.50px 0.94px */
				position: absolute;
				left: 0.0313em; /* .5px */
				right: -0.0351em; /* -.561px */
			}
		`;
		expect(convertStylesheet(stylesheet, true)).toBe(expected);
	});

});