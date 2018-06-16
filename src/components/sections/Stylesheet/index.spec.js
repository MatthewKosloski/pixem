/* eslint no-undef: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { InputText, Label, InputCheckbox, InputRadio, StyledTextarea } from '../../ui';

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

		const expectedUpdatedState = '1782378158742385738457823542';

		input.simulate('change', {
			target: {
				value: expectedUpdatedState,
				name: input.prop('name')
			}
		});

		expect(component().state('base')).toBe(expectedUpdatedState);

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

		const stateBeforeChange = component().state('shouldPreserveOriginalValues');

		expect(stateBeforeChange).toBeDefined();

		input.simulate('change', {
			target: {
				value: false,
				name: input.prop('name')
			}
		});

		expect(component()
			.state('shouldPreserveOriginalValues') === !stateBeforeChange)
		.toBeTruthy();
	});

	test(`The checkbox input with a name and id attr of "shouldPreserveOriginalValues" 
	has a value attr that is in sync with the component's state`, () => {
		const input = component()
			.find(InputCheckbox)
			.filterWhere(node => nodeHasIdAndName(node, 
				'shouldPreserveOriginalValues'));

		const state = component().state('shouldPreserveOriginalValues');

		expect(input.prop('checked')).toBe(state);

	});

	test(`Renders two radio inputs with a name attr of "unit"`, () => {
		const input = component()
			.find(InputRadio)
			.filterWhere(n => {
				const { name } = n.props();
				const expectedVal = 'unit';
				return name === expectedVal;
			});
		
		expect(input.length).toBe(2);
	});

	test(`The two radio inputs with a name attr of "unit" can 
	update the component's state`, () => {

		const radioVal0 = component()
			.find(InputRadio)
			.filterWhere(n => n.props().value === '0');

		radioVal0.simulate('change', {
			target: {
				value: '0',
				name: radioVal0.prop('name')
			}
		});

		expect(component().state('unit')).toBe('0');

		const radioVal1 = component()
			.find(InputRadio)
			.filterWhere(n => n.props().value === '1');
			
		radioVal1.simulate('change', {
			target: {
				value: '1',
				name: radioVal1.prop('name')
			}
		});

		expect(component().state('unit')).toBe('1');

	});

	test(`The two radio inputs with a name attr of "unit" 
	are in sync with the component's state`, () => {

		const radioVal0 = component()
			.find(InputRadio)
			.filterWhere(n => n.props().value === '0');

		const radioVal1 = component()
			.find(InputRadio)
			.filterWhere(n => n.props().value === '1');
		
		const state = component().state('unit');

		if(state === '0') {
			expect(radioVal0.prop('checked')).toBeTruthy();
			expect(radioVal1.prop('checked')).toBeFalsy();
		} else if(state === '1') {
			expect(radioVal0.prop('checked')).toBeFalsy();
			expect(radioVal1.prop('checked')).toBeTruthy();
		}
		
	});

	test(`Renders one textarea with a name attr of "textareaContents"`, () => {
		const textarea = component()
			.find(StyledTextarea)
			.filterWhere(n => n.props().name === 'textareaContents');
		
		expect(textarea.length).toBe(1);
	});

	test(`The textarea with a name attr of "textareaContents" can 
	update the component's state`, () => {
		const textarea = component()
			.find(StyledTextarea)
			.filterWhere(n => n.props().name === 'textareaContents');

		const expectedUpdatedState = 'some text';

		textarea.simulate('change', {
			target: {
				value: expectedUpdatedState,
				name: textarea.prop('name')
			}
		});

		expect(component().state('textareaContents'))
			.toBe(expectedUpdatedState);

	});

	test(`The textarea with a name attr of "textareaContents"
	is in sync with the component's state`, () => {

		const textarea = component()
			.find(StyledTextarea)
			.filterWhere(n => n.props().name === 'textareaContents');
		
		const state = component().state('textareaContents');

		expect(textarea.prop('value')).toBe(state);
		
	});
    
});