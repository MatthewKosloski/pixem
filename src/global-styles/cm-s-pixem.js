import theme from '../theme';

const { colors } = theme;

export default `

.cm-s-pixem {

	&.CodeMirror {
    	background-color: ${colors.shark};
		color: ${colors.porcelain};
		height: 100%;
		overflow-x: hidden !important;
  	}

	.CodeMirror-gutters {
		background: ${colors.shark};
		color: ${colors.shuttleGray};
		border: none;
	}

	.CodeMirror-guttermarker,
	.CodeMirror-guttermarker-subtle,
	.CodeMirror-linenumber,
	.cm-comment {
		color: ${colors.shuttleGray};
	}

	.CodeMirror-cursor {
		border-left: 1px solid ${colors.springWood};
	}

	.CodeMirror-scroll {
		overflow-x: hidden !important;
	}

	div.CodeMirror-selected {
		background: rgba(255, 255, 255, 0.15);
	}

	&.CodeMirror-focused div.CodeMirror-selected {
		background: rgba(255, 255, 255, 0.10);
	}

	.CodeMirror-line::selection,
	.CodeMirror-line > span::selection,
	.CodeMirror-line > span > span::selection {
		background: background: rgba(255, 255, 255, 0.10);
	}

	.CodeMirror-activeline-background {
		background: ${colors.black};
	}

	.cm-keyword { 
		color: ${colors.bilobaFlower}; 
	}

	.cm-operator,
	.cm-def  { 
		color: ${colors.porcelain}; 
	}

	.cm-variable-2,
	.cm-string-2,
	.cm-tag,
	.cm-meta,
	.cm-property { 
		color: ${colors.shakespeare}; 
	}

	.cm-variable-3,
	.cm-type,
	cm-variable {
		color: ${colors.malibu};
	}

	.cm-builtin,
	.cm-qualifier,
	.cm-variable-3,
	.cm-type {
		color: ${colors.froly}; 
	}

	.cm-atom,
	.cm-number {
		color: ${colors.aquamarine}; 
	}

	.cm-string {
		color: ${colors.yellowGreen}; 
	}

	.cm-attribute {
		color: ${colors.goldenTainoi}; 
	}

	.cm-tag { 
		color: ${colors.wildWatermelon}; 
	}

	.cm-error {
		color: ${colors.white};
		background-color: ${colors.mandy};
	}

	.CodeMirror-matchingbracket {
		text-decoration: underline;
		color: ${colors.white} !important;
	}

	.CodeMirror-lines {
		padding: 20px 10px;
	}

}

`;