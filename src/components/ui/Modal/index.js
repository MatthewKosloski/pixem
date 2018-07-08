import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

export default (props) => {
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
        </ReactModal>
    );
};