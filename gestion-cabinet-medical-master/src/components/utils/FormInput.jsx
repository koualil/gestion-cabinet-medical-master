import React from "react";

function FormInput(props) {
   const { type = "text", name, className, label } = props;

   return (
      <div className={`${className && className}`}>
         <label className="block" htmlFor={name}>
            {label}
         </label>
         <input type={type} placeholder={name} name={name} />
      </div>
   );
}

export default FormInput;
