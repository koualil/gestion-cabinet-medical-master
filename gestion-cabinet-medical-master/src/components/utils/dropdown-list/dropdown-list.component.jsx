import React, { useEffect, useState } from "react";

import "./dropdown-list.styles.scss";

function DropdownList({ values, setSelectedValue, selectedValue }) {
   const [filteredData, setFilteredData] = useState(values);

   useEffect(() => {
      window.addEventListener("click", function (e) {
         if (!document.getElementById("dropdown-input").contains(e.target)) {
            // Clicked outside the box
            if (
               !document
                  .getElementById("dropdown-list")
                  .classList.contains("hidden")
            ) {
               document.getElementById("dropdown-list").classList.add("hidden");
            }
         }
      });
   }, []);

   const onSelect = (v) => {
      setSelectedValue(v);
      toggleDropdownList();
   };

   const toggleDropdownList = () => {
      document.getElementById("dropdown-list").classList.toggle("hidden");
   };

   const onSearch = (e) => {
      const mot = e.target.value;
      setFilteredData(
         values.filter((m) => m.value.toLowerCase().includes(mot.toLowerCase()))
      );
   };

   return (
      <div id="dropdown-input" className="relative ">
         <input
            onClick={toggleDropdownList}
            value={selectedValue ? selectedValue.value : ""}
            readOnly
            type="text"
            className="cursor-pointer"
         />
         <span className="absolute inset-y-0 right-5 flex items-center mb-4">
            <i className="fas fa-angle-down"></i>
         </span>
         <div
            className="bg-gray-300 absolute w-full z-10 hidden border-2 -mt-4"
            id="dropdown-list"
         >
            <div className="flex items-center bg-slate-100 px-4 pt-4">
               <div className="relative m-3 w-full">
                  <input
                     className="w-full p-4"
                     type="text"
                     name="search"
                     onChange={onSearch}
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center mb-4">
                     <i className="fas fa-search"></i>
                  </span>
               </div>
            </div>
            <div>
               <ul className="medecin__list bg-white">
                  {filteredData.map((m, i) => (
                     <li
                        onClick={() => onSelect(m)}
                        key={m.id}
                        className=" flex items-center py-5 px-8 border-t"
                     >
                        <i class="fas fa-user-md mr-4"></i>
                        <p className="">{m.value}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default DropdownList;
