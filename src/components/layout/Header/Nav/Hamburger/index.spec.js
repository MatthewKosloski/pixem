/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Hamburger from './';
import StyledState from './StyledState';

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
		ariaControls: 'navigation',
		ariaLabel: 'label text',
		onClick: jest.fn(),
		isMobileMenuVisible: false
	};
	return Object.assign(defaults, overrides);
};

describe('<Hamburger />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = mount(
				<Hamburger {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {
			ariaControls: null,
			ariaLabel: null,
			onClick: null,
			isMobileMenuVisible: null
		};
		renderedComponent = null;
	});

	test(`All children are contained within a label element`, () => {
		props = getPropsForTest();
		expect(component().children().length).toBe(1);
		expect(component().children().childAt(0).is('label')).toBeTruthy();
	});

	test(`One StyledState component should always be rendered`, () => {
		props = getPropsForTest();
		expect(component().find(StyledState).length).toBe(1);
	});

	test(`A div hidden from screen readers with a span child 
		should always be rendered`, () => {
		props = getPropsForTest();
		expect(component().contains(
			<div aria-hidden="true">
				<span></span>
			</div>)).toBeTruthy();
	});

	test(`The ariaControls prop is supplied to the aria-controls 
		attribute of the root component`, () => {
		props = getPropsForTest();
		const rootComponent = component().children().childAt(0);
		expect(rootComponent.prop('aria-controls')).toBe(props.ariaControls);
	});

	test(`The ariaLabel prop is supplied to the aria-label 
		attribute of the root component`, () => {
		props = getPropsForTest();
		const rootComponent = component().children().childAt(0);
		expect(rootComponent.prop('aria-label')).toBe(props.ariaLabel);
	});

	test(`The ariaExpanded state is supplied to the aria-expanded 
		attribute of the root component`, () => {
		props = getPropsForTest();
		const rootComponent = component().children().childAt(0);
		expect(rootComponent.prop('aria-expanded')).toBe(component().state('ariaExpanded'));
	});

	test(`When clicked, the ariaExpanded state should change`, () => {
		props = getPropsForTest();

		expect(component().state('ariaExpanded')).toBeFalsy();

		// Simulate Hamburger click
		component().find(StyledState).simulate('change');

		expect(component().state('ariaExpanded')).toBeTruthy();
	});

	test(`When clicked, the onClick prop should be called once`, () => {
		props = getPropsForTest();

		// Simulate Hamburger click
		component().find(StyledState).simulate('change');

		expect(props.onClick.mock.calls.length).toBe(1);
	});

});