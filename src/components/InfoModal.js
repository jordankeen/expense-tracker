import React, { useRef, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { focusTrap, focusTrapRemove } from '../helpers/focusTrap.js';

const InfoModal = () => {
   const [showInfoModal, setShowInfoModal] = useState(false);
   const infoModal = useRef();
   const infoModalButton = useRef();

   // search react, set focus on show???

   // if no infoModal cookie, set cookie for 1 day, and show info modal
   useEffect(() => { 
      if (!Cookies.get('expensetracker_infoModal')) {
         Cookies.set('expensetracker_infoModal', true, { expires: 1 });
         setShowInfoModal(true);
         focusTrap(infoModal.current);
        
      }
   },[]);

   const closeInfoModal = () => {
      focusTrapRemove(infoModal.current);
      setShowInfoModal(false);
   }

   // close infoModal on click
   const handleOnClick = () => {
      closeInfoModal();
   }

   // close modal on esc key press
   const keyDownHandler = (e) => {
      if (showInfoModal) {
         e.keyCode === 27 && closeInfoModal();
      }
   };
   // const setFocus = () => {
   //    infoModalButton.current.focus();
   // }
  return (
    <div className={ showInfoModal ? 'info-modal active visible' : 'info-modal'} ref={infoModal} onClick={handleOnClick} onKeyDown={keyDownHandler} tabIndex='-1'>
       <div className='info-modal__inner'>
          <div className='info-modal__content' onClick={e => e.stopPropagation()}>
             <h2 className='info-modal__title'>Hello!</h2>
             <p className='info-modal__copy'>This is an Expense Tracker app built with React/Redux. For demo purposes I have provided some default expense items. This application is setup to persist data using local storage.</p>
             <button className='info-modal__close button-style' autoFocus onClick={handleOnClick} ref={infoModalButton}>Got it</button>
             {/* { showInfoModal && setFocus()} */}
          </div>
       </div>
    </div>
  )
}

export default InfoModal;