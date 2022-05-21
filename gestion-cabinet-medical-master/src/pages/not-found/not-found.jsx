import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
   return (
      <div className="h-screen flex justify-center items-center">
         <div className="text-center">
            <h1 className="mb-2">Oops !</h1>
            <h3 className="mb-8">404 - PAGE NOT FOUND</h3>
            <h5>
               <Link className="text-slate-500" to="/">
                  Home Page
               </Link>
            </h5>
         </div>
      </div>
   );
}

export default NotFound;
