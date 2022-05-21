import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../api/api";
import defaultImageProfile from "../../assets/images/default-img-profile.jpg";
import { setNotificationOn } from "../../redux/notification/notification.actions";
import { updatePatient } from "../../redux/patient/patient.actions";

function DossierAdministratif({ patient }) {
   const dispatch = useDispatch();
   const [previewImage, setPreviewImage] = useState(defaultImageProfile);

   useEffect(() => {
      if (patient.imageProfile) {
         setPreviewImage(BASE_URL + patient.imageProfile);
      }
   }, []);

   const showPreview = (e) => {
      if (e.target.files && e.target.files[0]) {
         setPreviewImage(URL.createObjectURL(e.target.files[0]));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      if (formData.get("decede")) {
         formData.set("decede", true);
      } else {
         formData.append("decede", false);
      }
      try {
         const res = await fetch(BASE_URL + "/api/patient/put.php", {
            method: "post",
            body: formData,
         });

         if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            dispatch(updatePatient(data));
            dispatch(
               setNotificationOn({
                  time: 3000,
                  message: "modification avec success",
               })
            );
         } else {
            throw Error;
         }
      } catch (error) {}
   };

   return (
      <div>
         <form id="patientForm" className="form__2" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-12">
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
            <input
               type="number"
               name="idUtilisateur"
               defaultValue={patient.idUtilisateur}
               hidden
            />

            <div className="input__group">
               <label htmlFor="nom">Nom :</label>
               <input type="text" name="nom" defaultValue={patient.nom} />
            </div>

            <div className="input__group">
               <label htmlFor="prenom">Prenom :</label>
               <input type="text" name="prenom" defaultValue={patient.prenom} />
            </div>
            <div className="input__group">
               <label htmlFor="cin">cin :</label>
               <input type="text" name="cin" defaultValue={patient.cin} />
            </div>
            <div className="input__group ">
               <label htmlFor="genre">Genre :</label>
               <div className=" flex items-center">
                  <input
                     type="radio"
                     name="genre"
                     value="homme"
                     className="mr-2 "
                     defaultChecked={patient.genre === "homme"}
                  />
                  <span className="mr-4">homme</span>
                  <input
                     type="radio"
                     name="genre"
                     value="femme"
                     className="mr-2 "
                     defaultChecked={patient.genre === "femme"}
                  />
                  <span>femme</span>
               </div>
            </div>
            <div className="input__group">
               <label htmlFor="situationFamilliale">
                  Situation familliale :
               </label>
               <select
                  defaultValue={patient.situationFamilliale}
                  type="text"
                  name="situationFamilliale"
               >
                  <option>marie</option>
                  <option>celibataire</option>
                  <option>Divorce</option>
                  <option>pacse</option>
                  <option>veuf</option>
               </select>
            </div>
            <div className="input__group">
               <label htmlFor="email">Date de naissance :</label>
               <input
                  type="text"
                  name="dateNaissance"
                  defaultValue={patient.dateNaissance}
               />
            </div>
            <div className="input__group">
               <label htmlFor="email">Email :</label>
               <input type="text" name="email" defaultValue={patient.email} />
            </div>
            <div className="input__group">
               <label htmlFor="motDePasse">Mot de passe :</label>
               <input type="password" name="motDePasse" />
            </div>
            <div className="input__group">
               <label htmlFor="tel">Tel :</label>
               <input type="text" name="tel" defaultValue={patient.tel} />
            </div>
            <div className="input__group">
               <label htmlFor="tel">Ville :</label>
               <input type="text" name="ville" />
            </div>
            <div className="input__group">
               <label htmlFor="adresse">Adresse :</label>
               <textarea
                  name="adresse"
                  rows="6"
                  defaultValue={patient.adresse}
               ></textarea>
            </div>
            <br />
            <hr />
            <br />
            <div className="input__group">
               <label htmlFor="groupeSanguin">groupe sanguin :</label>
               <input
                  type="text"
                  name="groupeSanguin"
                  defaultValue={patient.groupeSanguin}
               />
            </div>
            <div className="input__group flex items-center">
               <label htmlFor="">
                  <span>&#9888;</span> Patient décédé :
               </label>
               <input
                  type="checkbox"
                  name="decede"
                  defaultChecked={patient.decede}
               />
            </div>
            <div className="input__group"></div>

            <button className="button__2" type="submit">
               Modifier
            </button>
         </form>
      </div>
   );
}

export default DossierAdministratif;