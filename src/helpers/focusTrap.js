let previousElement,
   firstTab,
   lastTab;

export const focusTrap = (element) => {
   // Set previous element
   previousElement = document.activeElement;
   let elementString = 'a[href], button:not([disabled])';
   let focusableElements = [...element.querySelectorAll(elementString)];
   focusableElements = Array.from(focusableElements);
   firstTab = focusableElements[0]; 
   lastTab = focusableElements[focusableElements.length - 1];
   element.addEventListener('keydown', focusTrapTabKey);
}

export const focusTrapRemove = (element) => {
   element.removeEventListener('keydown', focusTrapTabKey);
   previousElement.focus();
}

const focusTrapTabKey = (e) => {
   const activeElement = document.activeElement;
   if (e.keyCode === 9 && e.shiftKey) {
      if (activeElement === firstTab) {
         e.preventDefault();
         lastTab.focus();
      }
   } else if (e.keyCode === 9) {
      if (activeElement === lastTab) {
         e.preventDefault();
         firstTab.focus();
      }
   } else {
      return;
   }
}