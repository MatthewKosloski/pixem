/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { InputText, Label, InputCheckbox, InputRadio } from '../../ui';

import Stylesheet from './';

Enzyme.configure({ adapter: new Adapter() });

/**
 * 
 * A predicate function that is passed to filterWhere
 * that returns true if the node has an ID and name
 * prop both equal to `expected.`
 * 
 * @param {ReactWrapper} node 
 * @param {String} expected 
 * @returns {Boolean}
 */
const nodeHasIdAndName = (node, expected) => {
	const { id, name } = node.props();
	return id === expected && name === expected;
};

describe('<Stylesheet />', () => {
	let renderedComponent;

	const component = () => {
		if (!renderedComponent) {
			renderedComponent = shallow(
				<Stylesheet />
			);
		}
		return renderedComponent;
	};

	beforeEach(() => {
		renderedComponent = null;
	});

	test(`Renders one text input with a name and id attr of "base"`, () => {
		const input = component()
			.find(InputText)
			.filterWhere(n => {
				const { id, name } = n.props();
				const expectedVal = 'base';
				return id === expectedVal && name === expectedVal;
			});
		
		expect(input.length).toBe(1);
	});
	
	test(`The text input with a name and id attr of "base" can 
	update the component's state`, () => {
		const input = component()
			.find(InputText)
			.filterWhere(node => nodeHasIdAndName(node, 'base'));

		expect(component().state('base')).toBe('16');

		input.simulate('change', {
			target: {
				value: '17',
				name: input.prop('name')
			}
		});

		expect(component().state('base')).toBe('17');

	});

	test(`The text input with a name and id attr of "base" has a value attr 
	that is in sync with the component's state`, () => {
		const input = component()
			.find(InputText)
			.filterWhere(node => nodeHasIdAndName(node, 'base'));

		const state = component().state('base');

		expect(input.prop('value')).toBe(state);

	});

	test(`The text input with a name and id attr of "base" is 
	associated with a label`, () => {

		const input = component()
			.find(InputText)
			.filterWhere(node => nodeHasIdAndName(node, 'base'));

		const label = component()
			.find(Label)
			.filterWhere(n => n.prop('htmlFor') === input.prop('id'));

		expect(input.length).toBe(1);
		expect(label.length).toBe(1);
	});

	test(`Renders one checkbox input with a name and id 
	attr of "shouldPreserveOriginalValues"`, () => {
		const input = component()
			.find(InputCheckbox)
			.filterWhere(node => nodeHasIdAndName(node, 
				'shouldPreserveOriginalValues'));
		
		expect(input.length).toBe(1);
	});

	test(`The checkbox input with a name and id attr of 
	"shouldPreserveOriginalValues" can update the component's state`, () => {
		const input = component()
			.find(InputCheckbox)
			.filterWhere(node => nodeHasIdAndName(node, 
				'shouldPreserveOriginalValues'));

		expect(component().state('shouldPreserveOriginalValues')).toBeTruthy();

		input.simulate('change', {
			target: {
				value: false,
				name: input.prop('name')
			}
		});

		expect(component().state('shouldPreserveOriginalValues')).toBeFalsy();
	});

	test.only(`Renders two radio inputs with a name attr of "unit"`, () => {
		const input = component()
			.find(InputRadio)
			.filterWhere(n => {
				const { name } = n.props();
				const expectedVal = 'unit';
				return name === expectedVal;
			});
		
		expect(input.length).toBe(2);
	});
    
});