import styled, { css } from 'styled-components';

import { Container as AtomContainer } from '@atoms';
import { _vrrem, _rem } from '@util-wrappers';

export const Label = styled('label')`${
    ({theme: {
        colors: {cadetBlue},
        media: {md}
    }}) => css`
        text-align: center;
        color: ${cadetBlue};
        margin: 0 auto;
        display: block;
        font-size: ${_rem(15)};
        @media ${md} {
            font-size: ${_rem(18)};
        }
    `
}`;

export const InputContainer = styled(AtomContainer)`${
    ({theme: {
        media: {md}
    }}) => css`
        input {
            width: 50px;
            margin: 0 ${_vrrem(0.5)};
            text-align: center;
            @media ${md} {
                width: 75px;
            }
        }
    `
}`;

export const TableContainer = styled('div')`${
    () => css`
        max-width: 500px;
        width: 100%;
        margin: ${_vrrem(4)} auto 0 auto;
    `
}`;

export const TableRows = styled('ul')`${
    ({theme: {
        media: {sm}
    }}) => css`
        margin-bottom: ${_vrrem(1)};
        margin-left: ${_vrrem(2)};
        @media ${sm} {
            margin-left: ${_vrrem(3)};
        }
    `
}`;

export const TableRow = styled('li')`${
    () => css`
        width: 100%;
        display: flex;
        list-style: none;
        margin-bottom: ${_vrrem(1)};
    `
}`;

export const TableColumnTitle = styled('div')`${
    ({theme: {
        colors: {shakespeare}
    }}) => css`
        color: ${shakespeare};
        font-weight: 700;
        font-size: ${_rem(14)};
        text-transform: uppercase;
        list-style: none;
        flex: 1;
    `
}`;

export const TableColumn = styled('div')`${
    ({theme: {
        colors: {shark}
    }}) => css`
        color: ${shark};
        flex: 1;
    `
}`;

export const TableColumnItem = styled('div')`${
    () => css`
    `
}`;

export const ButtonContainer = styled('div')`${
    () => css`
        text-align: center;
        margin-top: ${_vrrem(2)};
    `
}`;

