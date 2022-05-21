import React from "react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../api/api";

import Modal from "../../../components/utils/modal__1/modal__1.component";
import defaultImageProfile from "../../../assets/images/default-img-profile.jpg";

import "./medecin-page.styles.scss";
import ReactPaginate from "react-paginate";

const medecinFormValue = {
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

function MedecinPage() {
   const [medecins, setMedecins] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [pageData, setPageData] = useState([]);

   // const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(5);

   const [previewImage, setPreviewImage] = useState(defaultImageProfile);

   const [modalActive, setModalActive] = useState(false);
   const showModal = () => {
      setModalActive(true);
      document.querySelector("body").classList.add("modal__active");
   };

   const hideModal = () => {
      setModalActive(false);
      document.querySelector("body").classList.remove("modal__active");

      initializeForm();
   };

   useEffect(() => {
      paginate(1);
   }, [filteredData]);

   useEffect(() => {
      console.log(medecins);
      initializeForm();
      loadData();
   }, []);

   const loadData = async () => {
      const res = await fetch(`${BASE_URL}/api/medecin/getAll.php`);
      const data = await res.json();
      setMedecins(data);
      setFilteredData(data);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(Object.fromEntries(formData));
      const idUtilisateur = formData.get("idUtilisateur");
      if (idUtilisateur) {
         fetch(BASE_URL + "/api/medecin/put.php", {
            method: "post",
            body: formData,
         })
            .then((res) => {
               return res.json();
            })
            .then((data) => {
               console.log(data);
               setMedecins(
                  medecins.map((m) => {
                     if (m.idUtilisateur == idUtilisateur) {
                        return data;
                     } else {
                        return m;
                     }
                  })
               );
               setFilteredData(
                  medecins.map((m) => {
                     if (m.idUtilisateur == idUtilisateur) {
                        return data;
                     } else {
                        return m;
                     }
                  })
               );
               initializeForm();
            })
            .catch((err) => {});
      } else {
         fetch(BASE_URL + "/api/medecin/post.php", {
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
               setMedecins([...medecins, data]);
               setFilteredData([...medecins, data]);
               initializeForm();
            })
            .catch((err) => {});
      }
   };

   const onAjouteMedecin = () => {
      showModal();
   };

   const onDeleteMedecin = (id) => {
      console.log(medecins);
      const resultat = window.confirm(
         "are you sure you want to delete this record"
      );
      if (resultat) {
         fetch(`${BASE_URL}/api/medecin/delete.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
               setMedecins(medecins.filter((p) => p.idUtilisateur != id));
               setFilteredData(medecins.filter((p) => p.idUtilisateur != id));
            });
      }
   };

   const onUpdateMedecin = (id) => {
      setModalActive(true);

      const form = document.querySelector("#medecinForm");
      const medecin = medecins.filter((p) => p.idUtilisateur === id)[0];
      console.log(medecin);

      setPreviewImage(BASE_URL + medecin.imageProfile);

      form.idUtilisateur.value = medecin.idUtilisateur;
      form.nom.value = medecin.nom;
      form.prenom.value = medecin.prenom;
      form.cin.value = medecin.cin;
      form.genre.value = medecin.genre;
      form.situationFamilliale.value = medecin.situationFamilliale;
      form.email.value = medecin.email;
      form.tel.value = medecin.tel;
      form.adresse.value = medecin.adresse;
      form.dateNaissance.value = medecin.dateNaissance;
   };

   const onSearchMedecin = (e) => {
      const mot = e.target.value;
      setFilteredData(
         medecins.filter(
            (m) =>
               m.cin.toLowerCase().includes(mot.toLowerCase()) ||
               m.nom.toLowerCase().includes(mot.toLowerCase()) ||
               m.prenom.toLowerCase().includes(mot.toLowerCase())
         )
      );
   };

   const initializeForm = () => {
      setModalActive(false);

      document
         .querySelectorAll(
            "#medecinForm input, #medecinForm textarea, #medecinForm select"
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

   const paginate = (currentPage) => {
      const indexOfLastEmployee = currentPage * itemsPerPage;
      const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
      const currentData = filteredData.slice(
         indexOfFirstEmployee,
         indexOfLastEmployee
      );

      setPageData(currentData);
   };
   const countPages = Math.ceil(filteredData.length / itemsPerPage);
   const handlePageClick = (e) => {
      paginate(e.selected + 1);
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
                  onChange={onSearchMedecin}
                  className="search__input "
                  placeholder="Search for items"
               />
            </div>
            <div>
               <button onClick={onAjouteMedecin} className="button__1">
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
                     <th>cin</th>
                     <th>profile</th>
                     <th>nom</th>
                     <th>prenom</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {pageData.map((m, index) => (
                     <tr key={index}>
                        <td>{m.cin}</td>
                        <td>
                           <img
                              className="h-20 w-20 object-cover rounded-full border"
                              src={BASE_URL + m.imageProfile}
                              alt=""
                           />
                        </td>
                        <td>{m.nom}</td>
                        <td>{m.prenom}</td>
                        <td>
                           <div className="flex justify-around items-end">
                              <button
                                 onClick={() =>
                                    onUpdateMedecin(m.idUtilisateur)
                                 }
                              >
                                 <i className="text-4xl far fa-edit edit__icon"></i>
                              </button>
                              <button
                                 onClick={() =>
                                    onDeleteMedecin(m.idUtilisateur)
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

            <div className="flex justify-center">
               <ReactPaginate
                  previousLabel={<i className="fas fa-angle-double-left"></i>}
                  nextLabel={<i className="fas fa-angle-double-right"></i>}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={countPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
               />
            </div>
         </div>

         {/* *******************************  Modal  *************************************** */}

         <Modal
            closeModal={hideModal}
            className={`${modalActive ? "active" : ""}`}
         >
            <div>
               <form
                  id="medecinForm"
                  className="form__1"
                  onSubmit={handleSubmit}
               >
                  <div className="flex justify-center">
                     <div className="w-48 h-48 mb-8 relative">
                        <img
                           className="w-full h-full rounded-full object-cover border border-slate-300"
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
                     <input hidden type="number" name="idUtilisateur" />

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
                        <label htmlFor="dateNaissance">
                           date de naissance :
                        </label>
                        <input type="date" name="dateNaissance" />
                     </div>
                  </div>
                  <div className="flex gap-6 mb-4">
                     <div className="w-full">
                        <label htmlFor="cin">cne :</label>
                        <input type="text" name="cin" placeholder="cin" />
                     </div>
                     <div className="w-full">
                        <label htmlFor="genre">genre :</label>
                        <select type="text" name="genre">
                           <option>homme</option>
                           <option>femme</option>
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
                  <button className="button__1" type="submit">
                     Ajouter
                  </button>
               </form>
            </div>
         </Modal>
      </div>
   );
}

export default MedecinPage;
