import React from "react";
import "./notification.styles.scss";

function Notification({ message, className }) {
   return (
      <div className={`notification__container flex ${className && className}`}>
         <div className="mr-6">
            {/* <i className="text-4xl fas fa-check"></i> */}
            <i className="text-4xl far fa-bell"></i>
         </div>
         <div>
            <h1></h1>
            <p className="notification__message">{message}</p>
         </div>
      </div>
   );
}

export default Notification;
