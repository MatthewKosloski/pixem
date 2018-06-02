/* eslint no-undef: "off" */

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Menu from './Menu';
import StyledMobileMenu from './StyledMobileMenu';
import StyledDesktopMenu from './StyledDesktopMenu';

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
		items: [{link: '#link', text: 'text'}],
		isMobileMenuVisible: false,
		isMobile: false,
		id: 'navigation'
	};
	return Object.assign(defaults, overrides);
};

describe('<Menu />', () => {

	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = mount(
				<Menu {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {
			items: null,
			isMobileMenuVisible: null,
			isMobile: null,
			id: null
		};
		renderedComponent = null;
	});

	test('All children are contained within a nav element', () => {
		props = getPropsForTest();
		const rootComponent = component().children().childAt(0);
		expect(component().children().length).toBe(1);
		expect(rootComponent.is('nav')).toBeTruthy();
	});

	test('If prop isMobile is true, the child should be an instance of StyledMobileMenu', () => {
		// set isMobile prop to true
		props = getPropsForTest({isMobile: true});

		const rootComponent = component().children().childAt(0);

		expect(rootComponent.instance(StyledMobileMenu)).toBeTruthy();
	});

	test('If prop isMobile is false, the child should be an instance of StyledDesktopMenu', () => {
		props = getPropsForTest();

		const rootComponent = component().children().childAt(0);

		expect(rootComponent.instance(StyledDesktopMenu)).toBeTruthy();
	});

});