import theme from "../theme";

export default `
    .gutter {
        background-color: ${theme.colors.mako};
        &.gutter-horizontal {
            cursor: ew-resize;
        }
        &.gutter-vertical {
            cursor: ns-resize;
        }
    }
    .react-codemirror2 {
        height: 100%;
    }
`;