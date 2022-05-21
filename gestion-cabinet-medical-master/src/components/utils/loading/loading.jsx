import React from "react";
import "./loading.styles.scss";

function Loading() {
   return (
      <div className="loader">
         <div className="multi-ripple">
            <div></div>
            <div></div>
         </div>
      </div>
   );
}

export default Loading;
