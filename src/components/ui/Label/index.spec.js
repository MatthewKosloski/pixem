/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Label from './';
import StyledLabel from '../StyledLabel';
import Tooltip from '../Tooltip';

Enzyme.configure({ adapter: new Adapter() });

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
        htmlFor: 'some_id',
        title: 'some title',
        tooltipText: 'some tooltip text'
	};
	return Object.assign(defaults, overrides);
};

describe('<Label />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<Label {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

    test(`Renders one styled label component as the root`, () => {
        props = getPropsForTest();
        const label = component().find(StyledLabel);
        expect(label.parent().length).toBe(0);
        expect(label.length).toBe(1);
        expect(label.name()).toBe('styled.label');
    });

    test(`The htmlFor prop is passed to the styled label component`, () => {
        props = getPropsForTest();
        const label = component().find(StyledLabel);
        expect(label.prop('htmlFor')).toBe(props.htmlFor);
    });

    test(`The title prop is always displayed as the first child 
    of the styled label`, () => {
        props = getPropsForTest();
        const label = component().find(StyledLabel);
        expect(label.childAt(0).text()).toBe(props.title);
    });

    test(`If the tooltipText prop is truthy, one Tooltip is rendered`, () => {
        props = getPropsForTest();
        expect(component().find(Tooltip).length).toBe(1);
    });

    test(`If the tooltipText prop is falsy, no Tooltip is rendered`, () => {
        props = getPropsForTest({tooltipText: ''});
        expect(component().find(Tooltip).length).toBe(0);
    });

    test(`The tooltipText prop is provided to the Tooltip`, () => {
        props = getPropsForTest();
        expect(component().find(Tooltip).prop('text'))
        .toBe(props.tooltipText);
    });

});
