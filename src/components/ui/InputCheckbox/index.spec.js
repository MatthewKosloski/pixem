/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputCheckbox from './';
import StyledCheckbox from './StyledCheckbox';
import StyledCheckboxLabel from './StyledCheckboxLabel';

Enzyme.configure({ adapter: new Adapter() });

/*
*	Returns an object of props (default values).
* 
*	@param overrides {Object}
*	@return {Object}
*/
const getPropsForTest = (overrides = {}) => {
	const defaults = {
        id: 'some_id',
        name: 'some_name',
        checked: true,
        onChange: jest.fn()
	};
	return Object.assign(defaults, overrides);
};

describe('<InputCheckbox />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<InputCheckbox {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

	test(`All children are wrapped in a styled div`, () => {
		props = getPropsForTest();
        expect(component().name()).toBe('styled.div');
	});

	test(`The component renders one styled checkbox`, () => {
		props = getPropsForTest();

		const checkbox = component().find(StyledCheckbox);
		expect(checkbox.length).toBe(1);
		expect(checkbox.name()).toBe('styled.input');
		expect(checkbox.prop('type')).toBe('checkbox');
	});

	test(`The component renders one styled label`, () => {
		props = getPropsForTest();

		const label = component().find(StyledCheckboxLabel);
		expect(label.length).toBe(1);
		expect(label.name()).toBe('styled.label');
	});

	test(`The component's label renders one SVG`, () => {
		props = getPropsForTest();
		expect(component().find(StyledCheckboxLabel).children().find('svg').length).toBe(1);
	});
	
	test(`The component's styled label is associated with the 
	styled checkbox via the id prop`, () => {
		props = getPropsForTest();

		const label = component().find(StyledCheckboxLabel),
			checkbox = component().find(StyledCheckbox);

		const labelHtmlFor = label.prop('htmlFor'),
			checkboxId = checkbox.prop('id');

		expect(labelHtmlFor).toBe(checkboxId);
		expect(labelHtmlFor).toBe(props.id);
		expect(checkboxId).toBe(props.id);
	});

	test(`The component's styled checkbox consumes the name prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledCheckbox).prop('name')).toBe(props.name);
	});

	test(`The component's styled checkbox consumes the checked prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledCheckbox).prop('checked')).toBe(props.checked);
	});

	test(`The component's styled checkbox consumes the onChange prop`, () => {
		props = getPropsForTest();
		expect(component().find(StyledCheckbox).prop('onChange')).toBe(props.onChange);
	});

	test(`When the checkbox is clicked once,
	the onChange prop is called once`, () => {
		props = getPropsForTest();
		const checkbox = component().find(StyledCheckbox);
		checkbox.simulate('change');
		expect(checkbox.prop('onChange').mock.calls.length).toBe(1);
	});

});
