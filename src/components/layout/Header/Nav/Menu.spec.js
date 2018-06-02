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
*	@param ariaControls {String}
*	@param ariaLabel {String}
*	@param onClick {Function}
*	@param isMobileMenuVisible {Boolean}
*	@return {Object}
*/
const getPropsForTest = (
	items = [{link: '#link', text: 'text'}],
	isMobileMenuVisible = false,
	isMobile = false,
	id = 'navigation'
) => ({
	items,
	isMobileMenuVisible,
	isMobile,
	id
});

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
	}

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
		props = getPropsForTest(null, null, true, null);

		const rootComponent = component().children().childAt(0);

		expect(rootComponent.instance(StyledMobileMenu)).toBeTruthy();
	});

});