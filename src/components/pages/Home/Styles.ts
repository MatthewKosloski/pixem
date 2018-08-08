import styled, { css } from 'styled-components';

import { Heading2, Container as AtomContainer } from '@atoms';
import { _vrrem } from '@util-wrappers';

interface ISeparatorPropTypes {
    marginBottom?: number;
}

export const Home = styled('section')`${
    () => css``
}`;

export const Container = styled(AtomContainer)`${
    () => css`
        padding-top: ${_vrrem(3)};
    `
}`;

export const Title = styled(Heading2)`${
    () => css`
        text-align: center;
        margin: 0 auto ${_vrrem(2)} auto;
    `
}`;

export const Separator = styled('div')<ISeparatorPropTypes>`${
    ({
        marginBottom,
        theme: { colors: {mystic} }
    }) => css`
        width: 100%;
        height: 2px;
        background-color: ${mystic};
        margin-top: ${_vrrem(3)};
        margin-bottom: ${_vrrem(marginBottom)};
    `
}`

Separator.defaultProps = {
    marginBottom: 3
}