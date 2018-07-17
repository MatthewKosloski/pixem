/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tooltip from './';
import StyledTooltip from './StyledTooltip';
import StyledIconContainer from './StyledIconContainer';

Enzyme.configure({ adapter: new Adapter() });

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
        text: 'some tooltip text'
	};
	return Object.assign(defaults, overrides);
};

describe('<Tooltip />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<Tooltip {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

    test(`Renders one StyledTooltip as the root`, () => {
        props = getPropsForTest();

        const styledTooltip = component().find(StyledTooltip);
        expect(styledTooltip.parent().length).toBe(0);
        expect(styledTooltip.length).toBe(1);
    });

    test(`Renders one button in the StyledTooltip`, () => {
        props = getPropsForTest();

        expect(component().find('button').length).toBe(1);
    });

    test(`Renders one span in the StyledTooltip`, () => {
        props = getPropsForTest();

        expect(component().find('span').length).toBe(1);
    });

    test(`The id state is provided to the 
    button's aria-describedby prop`, () => {
        props = getPropsForTest();
        
        const componentIdState = component().state('id');
        const button = component().find('button');

        expect(button.prop('aria-describedby')).toBe(componentIdState);

    });

    test(`The id state is provided to the span`, () => {
        props = getPropsForTest();
        
        const componentIdState = component().state('id');
        const span = component().find('span');

        expect(span.prop('id')).toBe(componentIdState);

    });

    test(`The button renders one StyledIconContainer`, () => {
        props = getPropsForTest();

        expect(component().find(StyledIconContainer).length).toBe(1);

    });

    test(`The StyledIconContainer renders one svg`, () => {
        props = getPropsForTest();
        expect(component().find(StyledIconContainer).children()
        .find('svg').length).toBe(1);
    });

    test(`The Tooltip's text is rendered as a child of the span`, () => {
        props = getPropsForTest();
        const spanText = component().find('span').childAt(0).text();
        const tooltipText = component().instance().props.text;
        expect(spanText).toBe(tooltipText);
    });

});
