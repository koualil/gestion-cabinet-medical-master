import React from "react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../api/api";

import Modal from "../../../components/utils/modal__1/modal__1.component";
import defaultImageProfile from "../../../assets/images/default-img-profile.jpg";

import "./patient-page.styles.scss";

const InitialPatientFormValue = {
   idPatient: "",
   cne: "",
   nom: "",
   prenom: "",
   email: "",
   motDePasse: "",
   genre: "",
   situationFamilliale: "",
   tel: "",
   adresse: "",
   imageProfile: "",
   hauteur: "",
};

function PatientPage() {
   const [patients, setPatients] = useState([]);
   const [modalActive, setModalActive] = useState(false);
   const [previewImage, setPreviewImage] = useState(defaultImageProfile);

   useEffect(() => {
      initializeForm();

      fetch(`${BASE_URL}/controllers/patient/getAll.php`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPatients(data);
         });
   }, []);

   function ajouterPatient() {
      showModal();
   }

   const showModal = () => {
      setModalActive(true);
      document.querySelector("body").classList.add("modal__active");
   };

   const hideModal = () => {
      setModalActive(false);
      document.querySelector("body").classList.remove("modal__active");

      initializeForm();
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch(BASE_URL + "/controllers/patient/post.php", {
         method: "post",
         body: formData,
      })
         .then((res) => {
            if (res.status === 200) {
               return res.json();
            } else {
               throw Error;
            }
         })
         .then((data) => {
            setPatients([...patients, data]);
            console.log(data);
            initializeForm();
         })
         .catch((err) => {});
   };

   const supprimerPatient = (id) => {
      const resultat = window.confirm(
         "are you sure you want to delete this record"
      );
      if (resultat) {
         fetch(`${BASE_URL}/controllers/patient/delete.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
               setPatients(patients.filter((p) => p.idPatient !== id));
            });
      }
   };

   const modifierPatient = (id) => {
      setModalActive(true);

      const form = document.querySelector("#patientForm");
      const patient = patients.filter((p) => p.idPatient === id)[0];
      console.log(patient);

      form.nom.value = patient.nom;
      form.prenom.value = patient.prenom;
      form.cne.value = patient.cne;
      form.genre.value = patient.genre;
      form.situationFamilliale.value = patient.situationFamilliale;
      form.email.value = patient.email;
      form.tel.value = patient.tel;
      form.adresse.value = patient.adresse;
   };

   const initializeForm = () => {
      setModalActive(false);

      document
         .querySelectorAll(
            "#patientForm input, #patientForm textarea, #patientForm select"
         )
         .forEach((elem) => {
            elem.value = "";
         });
      setPreviewImage(defaultImageProfile);
   };

   const showPreview = (e) => {
      if (e.target.files && e.target.files[0]) {
         setPreviewImage(URL.createObjectURL(e.target.files[0]));
      }
   };

   return (
      <div className="p-8">
         <div className="flex justify-between mb-8">
            <div class="relative">
               <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="w-5 h-5 text-gray-500 fas fa-search"></i>
               </div>
               <input
                  type="text"
                  id="table-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  "
                  placeholder="Search for items"
               />
            </div>
            <div>
               <button onClick={ajouterPatient} className="button__1">
                  Ajouter
               </button>
            </div>
         </div>
         <hr />
         <br />
         <div>
            <table className="table__1 ">
               <thead>
                  <tr>
                     <th>cne</th>
                     <th>profile</th>
                     <th>nom</th>
                     <th>prenom</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {patients.map((patient, index) => (
                     <tr key={index}>
                        <td>{patient.cne}</td>
                        <td>
                           <img
                              className="h-20 w-20 object-cover rounded-full border"
                              src={BASE_URL + patient.imageProfile}
                              alt=""
                           />
                        </td>
                        <td>{patient.nom}</td>
                        <td>{patient.prenom}</td>
                        <td>
                           <div className="flex justify-around items-end">
                              <button
                                 onClick={() =>
                                    modifierPatient(patient.idPatient)
                                 }
                              >
                                 <i className="text-4xl far fa-edit edit__icon"></i>
                              </button>
                              <button
                                 onClick={() =>
                                    supprimerPatient(patient.idPatient)
                                 }
                              >
                                 <i className="text-4xl far fa-trash-alt delete__icon"></i>
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <Modal
            closeModal={hideModal}
            className={`${modalActive ? "active" : ""}`}
         >
            <div>
               <form
                  id="patientForm"
                  className="form__1"
                  onSubmit={handleSubmit}
               >
                  <div className="flex justify-center">
                     <div className="w-48 h-48 mb-8 relative">
                        <img
                           className="w-full h-full rounded-full object-cover border border-black"
                           src={previewImage}
                           alt=""
                        />
                        <label
                           htmlFor="image-profile"
                           className="absolute -right-2 -bottom-2 cursor-pointer"
                        >
                           <i className="far fa-edit"></i>
                        </label>
                     </div>
                     <input
                        type="file"
                        accept="image/*"
                        onChange={showPreview}
                        id="image-profile"
                        name="imageProfile"
                        hidden
                     />
                  </div>

                  <div className="flex gap-6 mb-4">
                     <div className="w-full">
                        <label htmlFor="nom">nom :</label>
                        <input type="text" name="nom" placeholder="nom" />
                     </div>
                     <div className="w-full">
                        <label htmlFor="prenom">prenom :</label>
                        <input type="text" name="prenom" placeholder="prenom" />
                     </div>
                  </div>
                  <div className="flex gap-6 mb-4">
                     <div className="w-full">
                        <label htmlFor="cne">cne :</label>
                        <input type="text" name="cne" placeholder="cne" />
                     </div>
                     <div className="w-full">
                        <label htmlFor="genre">genre :</label>
                        <select type="text" name="genre">
                           <option>male</option>
                           <option>femelle</option>
                        </select>
                     </div>
                     <div className="w-full">
                        <label htmlFor="situationFamilliale">
                           situation familliale :
                        </label>
                        <select type="text" name="situationFamilliale">
                           <option>marie</option>
                           <option>celibataire</option>
                           <option>Divorce</option>
                           <option>pacse</option>
                           <option>veuf</option>
                        </select>
                     </div>
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">email :</label>
                     <input type="text" name="email" placeholder="email" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="motDePasse">mot de passe :</label>
                     <input
                        type="password"
                        name="motDePasse"
                        placeholder="motDePasse"
                     />
                  </div>
                  <div className="w-full">
                     <label htmlFor="tel">tel :</label>
                     <input type="text" name="tel" placeholder="tel" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="adresse">adresse :</label>
                     <textarea
                        name="adresse"
                        rows="6"
                        placeholder="adresse"
                     ></textarea>
                  </div>
                  <button type="submit">Ajouter</button>
               </form>
            </div>
         </Modal>
      </div>
   );
}

export default PatientPage;
