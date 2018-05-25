import React, { Component } from 'react';
import valueParser from 'postcss-value-parser';
import styled from 'styled-components';
import { isNumberEven } from '../utils';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stylesheet: `.title {
	font-size: 12px;
	line-height: 1.3;
	width: 80%; 
}`,
			base: '16',
			conversionUnit: '0', // 0 = EMs, 1 = REMs
			shouldPreserveOriginalValues: false
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.convertPixelUnits = this.convertPixelUnits.bind(this);
	}

	getConversionUnitString() {
		const { conversionUnit } = this.state;
		return ['em', 'rem'][Number(conversionUnit)];
	}

	/*
	*	Takes an ats object returned by
	*	valueParser and converts properties
	*	with pixel units to the selected
	*	conversion unit. The returned value
	*	is a string, which is the resulting
	*	stylesheet after conversion.
	*
	*	@param ats {Object}
	*	@return {String}
	*/
	convertPixelUnits(ats) {
		const { base } = this.state;
		const unit = this.getConversionUnitString();
		ats.walk(node => {
			const quantity = valueParser.unit(node.value);
			if (node.type === 'word' && quantity) {
				if (/px/.test(quantity.unit)) {
					const emValue = quantity.number / base;
					node.value = `${
						isNumberEven(emValue) ? emValue : emValue.toFixed(4)
					}${unit};`;
				}
			}
		});
		return valueParser.stringify(ats);
	}

	onSubmit(e) {
		e.preventDefault();
		const parsedStylesheet = valueParser(this.state.stylesheet);
		const transformedStylesheet = this.convertPixelUnits(parsedStylesheet);
		this.setState({ stylesheet: transformedStylesheet });
	}

	handleChange(e) {
		const { target } = e;
		const name = target.name;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
	}

	render() {
		const Textarea = styled('textarea')`
			width: 200px;
			height: 200px;
		`;
		/*
			<Textarea>
			<BaseInput>
			<PreserveOriginalValues>
			<ConversionUnit>
			<ConvertButton>
			https://jsfiddle.net/dgyrq182/1/
			/[-+]?[0-9]*([.][0-9]+)?px/
		*/
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="stylesheet">Stylesheet:</label>
				<br />
				<Textarea
					name="stylesheet"
					id="stylesheet"
					onChange={this.handleChange}
					value={this.state.stylesheet}
				/>
				<br />

				<label htmlFor="base">Base Pixel Size:</label>
				<br />
				<input
					type="text"
					name="base"
					id="base"
					onChange={this.handleChange}
					value={this.state.base}
				/>
				<br />

				<label htmlFor="preserve-original-values">
					Preserve Original Values:
				</label>
				<br />
				<input
					type="checkbox"
					name="shouldPreserveOriginalValues"
					id="preserve-original-values"
					checked={this.state.shouldPreserveOriginalValues}
					onChange={this.handleChange}
				/>
				<br />

				<p>Conversion unit:</p>
				<br />
				<label htmlFor="ems">EMs</label>
				<input
					type="radio"
					id="ems"
					name="conversionUnit"
					value="0"
					checked={this.state.conversionUnit === '0'}
					onChange={this.handleChange}
				/>

				<label htmlFor="rems">REMs</label>
				<input
					type="radio"
					id="rems"
					name="conversionUnit"
					value="1"
					checked={this.state.conversionUnit === '1'}
					onChange={this.handleChange}
				/>

				<input type="submit" value="Convert" />
			</form>
		);
	}
}

export default Form;
