import React, { useEffect, useState } from "react";
import "./modal__1.styles.scss";

function Modal({ closeModal, children, ...othersProps}) {
   return (
      <div className={`${othersProps.className} task__modal `}>
         <div className="modal__wrapper">
            <button onClick={closeModal} className="close"></button>
            <div className="modal__content">{children}</div>
         </div>
      </div>
   );
}

export default Modal;
