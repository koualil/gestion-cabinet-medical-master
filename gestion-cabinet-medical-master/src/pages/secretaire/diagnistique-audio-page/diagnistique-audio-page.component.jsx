import React, { useState } from "react";
import { Link } from "react-router-dom";

function DiagnistiqueAudioPage() {
   const [modalActive, setModalActive] = useState(false);

   const showModal = () => {
      setModalActive(true);
      document.querySelector("body").classList.add("modal__active");
   };
   const hideModal = () => {
      setModalActive(false);
      document.querySelector("body").classList.remove("modal__active");
   };
   return (
      <div className="p-8">
         <h2 className="title__1">En Attente</h2>
         <br />
         <div className="flex justify-between mb-8">
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="w-5 h-5 text-gray-500 fas fa-search"></i>
               </div>
               <input
                  type="text"
                  id="table-search"
                  className="search__input"
                  placeholder="Search for items"
               />
            </div>
         </div>
         <hr />
         <br />
         <div className="mb-12">
            <table className="table__1 ">
               <thead>
                  <tr>
                     <th>medecin</th>
                     <th>nom de patient</th>
                     <th>date</th>
                     <th>completé</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Dr. flan</td>
                     <td>amine koulali</td>
                     <td>12-06-2022 15:00</td>
                     <td className="">
                        <button className="cursor-pointer">
                           <i class="far fa-check-circle text-4xl"></i>
                        </button>
                     </td>
                     <td>
                        <div className="flex justify-around items-end">
                           <Link
                              to="/secretaire/patient/1/16/2"
                              className="lien"
                           >
                              consulter
                           </Link>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>

         <h2 className="title__1">Completé</h2>

         <br />
         <div className="flex justify-between mb-8">
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="w-5 h-5 text-gray-500 fas fa-search"></i>
               </div>
               <input
                  type="text"
                  id="table-search"
                  className="search__input"
                  placeholder="Search for items"
               />
            </div>
         </div>
         <hr />
         <br />
         <div>
            <table className="table__1 ">
               <thead>
                  <tr>
                     <th>medecin</th>
                     <th>nom de patient</th>
                     <th>date</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Dr. flan</td>
                     <td>amine koulali</td>
                     <td>12-06-2022 15:00</td>

                     <td>
                        <div className="flex justify-around items-end">
                           <Link
                              to="/secretaire/patient/1/16/2"
                              className="lien"
                           >
                              modifier
                           </Link>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default DiagnistiqueAudioPage;
