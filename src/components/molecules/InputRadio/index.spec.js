/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputRadio from './';
import StyledRadio from './StyledRadio';
import StyledRadioLabel from './StyledRadioLabel';

Enzyme.configure({ adapter: new Adapter() });

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
        title: 'some_title',
        name: 'some_name',
        value: 'some_value',
        checked: true,
        onChange: jest.fn()
	};
	return Object.assign(defaults, overrides);
};

describe('<InputRadio />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<InputRadio {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

	test(`Renders one styled radio input`, () => {
		props = getPropsForTest();
		const input = component().find(StyledRadio);
		expect(input.length).toBe(1);
		expect(input.name()).toBe('styled.input');
		expect(input.prop('type')).toBe('radio');
	});

	test(`Renders one styled label`, () => {
		props = getPropsForTest();
		const label = component().find(StyledRadioLabel);
		expect(label.length).toBe(1);
		expect(label.name()).toBe('styled.label');
	});

	test(`The component's styled input consumes the name prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledRadio).prop('name')).toBe(props.name);
	});

	test(`The component's styled input consumes the value prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledRadio).prop('value')).toBe(props.value);
	});
	
	test(`The component's styled input consumes the checked prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledRadio).prop('checked')).toBe(props.checked);
	});

	test(`When the component's styled input is clicked once, 
	the onChange prop should be called once`, () => {
		props = getPropsForTest();
		const input = component().find(StyledRadio);
		input.simulate('change');
		expect(input.prop('onChange').mock.calls.length).toBe(1);
	});

	test(`The component's styled label is associated with the 
	styled input via the id prop`, () => {
		props = getPropsForTest();

		const label = component().find(StyledRadioLabel),
			input = component().find(StyledRadio);

		const labelHtmlFor = label.prop('htmlFor'),
			inputId = input.prop('id');

		expect(labelHtmlFor).toBe(inputId);
	});

	test(`The component's title prop is rendered as a child of
	 the styled label`, () => {
		props = getPropsForTest();

		const { title } = props;
		expect(component().find(StyledRadioLabel).children().contains(title)).toBeTruthy();
	});

});
