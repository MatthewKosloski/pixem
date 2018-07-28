import theme from '../theme';
import { _vrrem, _rem, _modularscalerem } from '../util-wrappers';

const { cadetBlue, white } = theme.colors;
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
        background-color: transparent;
        overflow-y: auto;
    }

    .modal__overlay--after-open {
        transition: background-color 300ms;
        background-color: rgba(41,44,51,0.67);
    }

    .modal__content {
        background-color: ${white};
        border-radius: 6px;
        box-shadow: 0 8px 32px 16px rgba(0, 0, 0, 0.2);
        max-width: calc(100% - ${_vrrem(2)});
        width: 768px;
        margin-left: auto;
        margin-right: auto;
        padding: ${_vrrem(1)};
        opacity: 0;
        position: relative;
        margin-top: ${_vrrem(1)};
        margin-bottom: ${_vrrem(1)};
        transform: scale3d(0, 0, 0);
        @media (min-height: 500px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale3d(0.5, 0.5, 0.5);
        }
    }

    .modal__content--after-open {
        opacity: 1;
        transition: transform 150ms ease, opacity 300ms;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        &:focus {
            outline: 0;
        }
    }

    .modal__content--before-close {
        opacity: 0;
    }

    .modal__close {
        position: absolute;
        cursor: pointer;
        right: ${_vrrem(1)};
        top: ${_vrrem(1)};
        width: 20px;
        height: 20px;
        &::before,
        &::after {
            content: '';
            width: 100%;
            height: 4px;
            background-color: ${cadetBlue};
            border-radius: 100px;
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

`;