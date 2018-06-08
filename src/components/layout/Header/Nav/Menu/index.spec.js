/* eslint no-undef: "off" */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Menu from './';
import StyledMobileMenu from './StyledMobileMenu';
import StyledDesktopMenu from './StyledDesktopMenu';

const defaultPropsForTest = {
	items: [
		{link: '#link', text: 'text'}, 
		{link: '#link', text: 'text'}
	],
	isMobileMenuVisible: false,
	isMobile: false,
	id: 'navigation'
};

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) =>
	Object.assign(Object.assign({}, defaultPropsForTest), overrides);

describe('<Menu />', () => {

	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<Menu {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

	test(`All children are contained within a nav element`, () => {
		props = getPropsForTest();
		expect(component().name()).toBe('styled.nav');
	});

	test(`For mobile, the component should be 
	an instance of StyledMobileMenu`, () => {
		// isMobile prop to true
		props = getPropsForTest({isMobile: true});

		expect(component().find(StyledMobileMenu).length).toBe(1);

	});

	test(`For desktop, the component should be 
	an instance of StyledDesktopMenu`, () => {
		// isMobile prop is false
		props = getPropsForTest();

		expect(component().find(StyledDesktopMenu).length).toBe(1);
	});

	test(`For mobile, the component should be 
	provided with an id and isMobileMenuVisible prop`, () => {
		props = getPropsForTest({isMobile: true});

		expect(component().prop('id')).toBeDefined();
		expect(component().prop('isMobileMenuVisible')).toBeDefined();
	});

	test(`For desktop, the component should be 
	provided with an id and no isMobileMenuVisible prop`, () => {
		props = getPropsForTest();

		expect(component().prop('id')).toBeDefined();
		expect(component().prop('isMobileMenuVisible')).toBeUndefined();
	});

	test(`The component should render one ul element`, () => {
		props = getPropsForTest();

		expect(component().find('ul').length).toBe(1);
	});

	test(`The child ul should render a li for each 
	item within the items prop,`, () => {
		props = getPropsForTest();
		const expectedLiQuantity = defaultPropsForTest.items.length;
		expect(component().find('ul').find('li').length).toBe(expectedLiQuantity);
	});

	test(`Each li should contain an anchor 
	element with an href and text`, () => {
		props = getPropsForTest();

		const items = component().find('ul').find('li');

		items.forEach((item, index) => {
			const a = item.find('a');
			const { href, children } = a.props();
			expect(href).toBe(defaultPropsForTest.items[index].link);
			expect(children).toBe(defaultPropsForTest.items[index].text);
		});

	});

});