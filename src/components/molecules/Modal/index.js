import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#app');

const Modal = (props) => {
    return (
        <ReactModal 
            closeTimeoutMS={150}
            shouldCloseOnOverlayClick={true}
            portalClassName='modal'
            className={{
                base: 'modal__content',
                afterOpen: 'modal__content--after-open',
                beforeClose: 'modal__content--before-close'
            }}
            overlayClassName={{
                base: 'modal__overlay',
                afterOpen: 'modal__overlay--after-open',
                beforeClose: 'modal__overlay--before-close'
            }}
            {...props}>
            {props.children}
            <span 
                className="modal__close"
                aria-label="Close Modal"
                onClick={props.onRequestClose}>
            </span>
        </ReactModal>
    );
};

Modal.propTypes = {
    onRequestClose: PropTypes.func.isRequired
};

export default Modal;