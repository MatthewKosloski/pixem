export default `

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 112.5%;
        line-height: 1.3;
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    input,
    textarea {
        font-family: inherit;
    }
    
`;
