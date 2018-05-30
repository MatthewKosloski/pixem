import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Nav from './';
import StyledContainer from './StyledContainer';
import Hamburger from './Hamburger';
import Menu from './Menu';
import StyledState from './StyledState';

/*
*	Changes the value of a state key
*	on a particular component.
*	
*	@param component {ShallowWrapper}
*	@param key {String}
*	@param value {Any}
*/
const setState = (component, key, value) => {
	component().instance().state[key] = value;
}

describe('<Nav />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = mount(
				<Nav {...props} />
			);
		}
		return renderedComponent;
	}

	beforeEach(() => {
		props = {
			items: null
		};
		renderedComponent = null;
	});

	test(`If viewport has a width of 500 pixels or less, 
		the Hamburger component is rendered`, () => {
		props.items = [
			{link: '#a', text: 'A'},
			{link: '#b', text: 'B'}
		];
		component().setState({'viewportWidth': 500});
		expect(component().find(Hamburger).length).toBe(1);
		component().setState({'viewportWidth': 499});
		expect(component().find(Hamburger).length).toBe(1);
	});

	test(`If viewport has a width greater than 500 pixels, 
		the Hamburger component is NOT rendered`, () => {
		props.items = [
			{link: '#a', text: 'A'},
			{link: '#b', text: 'B'}
		];
		component().setState({'viewportWidth': 501});
		expect(component().find(Hamburger).length).toBe(0);
	});

	test(`Menu component should always be rendered`, () => {
		props.items = [
			{link: '#a', text: 'A'},
			{link: '#b', text: 'B'}
		];
		expect(component().find(Menu).length).toBe(1);
	});

	test(`When the Hamburger is clicked, 
		the isMobileMenuVisible state attribute should change`, () => {
		props.items = [
			{link: '#a', text: 'A'},
			{link: '#b', text: 'B'}
		];

		// Simulate mobile device to access Hamburger
		component().setState({'viewportWidth': 500});

		expect(component().state('isMobileMenuVisible')).toBe(false);

		// Toggle the Hamburger's checkbox 
		component().find(Hamburger).children().find(StyledState).simulate('change');

		expect(component().state('isMobileMenuVisible')).toBe(true);
	});

});
