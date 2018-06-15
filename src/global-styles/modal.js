import theme from '../theme';
import { _vrrem, _rem, _modularscalerem } from '../util-wrappers';

const { cadetBlue, shark } = theme.colors;
const { sm, md } = theme.media;

export default `
    .ReactModal__Body--open,
    .ReactModal__Html--open {
        overflow: hidden;
    }

    .modal__overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        background-color: white;
        overflow-y: auto;
    }

    .modal__content {
        max-width: 100%;
        width: 768px;
        margin: 0 auto;
        padding: ${_vrrem(5)} ${_vrrem(1)} ${_vrrem(1)} ${_vrrem(1)};
        opacity: 0;
        p {
            text-align: center;
            font-size: ${_rem(18)};
            @media ${sm} {
                font-size: ${_modularscalerem(1)};
            }
            @media ${md} {
                font-size: ${_modularscalerem(2)};
            }
            font-family: 'Open Sans', sans-serif;
            margin-bottom: ${_vrrem(3)};
            color: ${cadetBlue};
        }
        textarea {
            box-shadow: 0 4px 32px 6px rgba(0, 0, 0, 0.33);
            background-color: ${shark};
            width: 100%;
            min-height: 475px;
            border: none;
            border-radius: 6px;
            font-size: ${_rem(12)};
            @media ${sm} {
                font-size: ${_rem(16)};
            }
            @media ${md} {
                font-size: ${_rem(20)};
            }
            color: #fff;
            padding: ${_vrrem(1)};
            resize: none;
        }
        span {
            position: absolute;
            cursor: pointer;
            right: ${_vrrem(1)};
            top: ${_vrrem(1)};
            width: 24px;
            height: 24px;
            @media ${sm} {
                width: 32px;
                height: 32px;
            }
            &::before,
            &::after {
                content: '';
                width: 100%;
                height: 4px;
                background-color: ${cadetBlue};
                position: absolute;
                top: 50%;
                left: 0;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }
        }
    }

    .modal__content--after-open {
        opacity: 1;
        transition: opacity 300ms;
        &:focus {
            outline: 0;
        }
    }

    .modal__content--before-close {
        opacity: 0;
    }

`;