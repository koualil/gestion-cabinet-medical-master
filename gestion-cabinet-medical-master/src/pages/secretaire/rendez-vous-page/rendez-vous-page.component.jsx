import React, { useEffect, useState } from "react";
import DropdownList from "../../../components/utils/dropdown-list/dropdown-list.component";
import Modal from "../../../components/utils/modal__1/modal__1.component";

import "./rendez-vous-page.styles.scss";

const medecins = [
   {
      id: 1,
      value: "medecin 1",
   },
   {
      id: 2,
      value: "medecin 2",
   },
   {
      id: 3,
      value: "medecin 3",
   },
   {
      id: 4,
      value: "medecin 4",
   },
   {
      id: 5,
      value: "medecin 5",
   },
   {
      id: 6,
      value: "medecin 6",
   },
];

function RendezVousPage() {
   const [modalActive, setModalActive] = useState(false);

   const [medecinSelected, setMedecinSelected] = useState(null);
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
            <div>
               <button className="button__1" onClick={showModal}>
                  Ajouter un RDV
               </button>
            </div>
         </div>
         <hr />
         <br />
         <div>
            <table className="table__1 ">
               <thead>
                  <tr>
                     <th>nom de patient</th>
                     <th>num de tel</th>
                     <th>date</th>
                     <th>medecin</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>amine koulali</td>
                     <td>062345678</td>
                     <td>12-06-2022 15:00</td>
                     <td>Dr. flan</td>
                     <td>
                        <div className="flex justify-around items-end">
                           <button>
                              <i className="text-4xl far fa-edit edit__icon"></i>
                           </button>
                           <button>
                              <i className="text-4xl far fa-trash-alt delete__icon"></i>
                           </button>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>

         {/* *******************************  Modal  *************************************** */}

         <Modal
            closeModal={hideModal}
            className={`${modalActive ? "active" : ""}`}
         >
            <div>
               <form id="medecinForm" className="form__1">
                  <div className="flex gap-6 mb-4">
                     <input hidden type="number" name="idUtilisateur" />

                     <div className="w-full">
                        <label htmlFor="nom">nom :</label>
                        <input type="text" name="nom" />
                     </div>
                     <div className="w-full">
                        <label htmlFor="prenom">prenom :</label>
                        <input type="text" name="prenom" />
                     </div>
                  </div>
                  <div className="flex gap-6 mb-4">
                     <input hidden type="number" name="idUtilisateur" />

                     <div className="w-full">
                        <label htmlFor="nom">tel :</label>
                        <input type="tel" name="tel" />
                     </div>
                     <div className="w-full">
                        <label htmlFor="prenom">ville :</label>
                        <input type="text" name="ville" />
                     </div>
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">medecin :</label>
                     <DropdownList
                        values={medecins}
                        selectedValue={medecinSelected}
                        setSelectedValue={setMedecinSelected}
                     />
                  </div>
                  <div className="flex gap-6 mb-4">
                     <div className="max-w-md">
                        <label htmlFor="cne">date :</label>
                        <input type="datetime-local" name="date" />
                     </div>
                  </div>

                  <div className="w-full">
                     <label htmlFor="adresse">remarques :</label>
                     <textarea name="adresse" rows="6"></textarea>
                  </div>
                  <button className="button__1" type="submit">
                     Ajouter
                  </button>
               </form>
            </div>
         </Modal>
      </div>
   );
}

export default RendezVousPage;
