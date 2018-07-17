/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputText from './';
import StyledInputText from './StyledInputText';

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
        value: 'some_value',
        onChange: jest.fn()
	};
	return Object.assign(defaults, overrides);
};

describe('<InputText />', () => {
	let props;
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<InputText {...props} />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		props = {};
		renderedComponent = null;
	});

    test(`Renders one styled text input`, () => {
		props = getPropsForTest();
		const input = component().find(StyledInputText);
		expect(input.length).toBe(1);
		expect(input.name()).toBe('styled.input');
		expect(input.prop('type')).toBe('text');
    });
    
    test(`The styled text input consumes the name prop`, () => {
		props = getPropsForTest();
		const input = component().find(StyledInputText);
		expect(input.prop('name')).toBe(props.name);
    });
    
    test(`The styled text input consumes the id prop`, () => {
		props = getPropsForTest();
		const input = component().find(StyledInputText);
		expect(input.prop('id')).toBe(props.id);
    });
    
    test(`The styled text input consumes the value prop`, () => {
		props = getPropsForTest();
		const input = component().find(StyledInputText);
		expect(input.prop('value')).toBe(props.value);
    });
    
    test(`When the styled text input's value changes,
     the onChange prop is called`, () => {
		props = getPropsForTest();
        const input = component().find(StyledInputText);
        input.simulate('change', {target: { value: 'foo' }});
		expect(input.prop('onChange').mock.calls.length).toBe(1);
	});

});
