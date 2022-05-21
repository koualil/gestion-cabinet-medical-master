import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import audio1 from "../../assets/audio/audio1.mp3";
import Modal from "../utils/modal__1/modal__1.component";
import {
   ajouterCompteRendu,
   deleteCompteRendu,
} from "../../redux/compteRendu/compteRendu.actions";

function CompteRenduList({ idConsultation }) {
   const formElement = useRef();
   const collapseList = useRef();

   const dispatch = useDispatch();

   const comptesRendu = useSelector((state) =>
      state.compteRendu.filter((c) => c.idConsultation == idConsultation)
   );

   // ---------------------- Modal --------------------------------
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
   // -------------------------------------------------------------

   const initializeForm = () => {
      formElement.current
         .querySelectorAll("input, textarea")
         .forEach((elem) => {
            elem.value = "";
         });

      formElement.current.idConsultation.value = idConsultation;
   };

   useEffect(() => {
      initializeForm();
      const collapseElement = collapseList.current;
      const collapseitems = collapseElement.querySelectorAll(".collapse-item");

      const collapseDesc = collapseElement.querySelectorAll(".collapse-desc");

      // collapseDesc.forEach((desc) => {
      //    desc.classList.add("hidden");
      // });
      collapseitems.forEach((c) => {
         c.addEventListener("click", (e) => {
            collapseDesc.forEach((desc) => {
               if (desc.getAttribute("data-id") === e.target.id) {
                  desc.classList.toggle("hidden");
               } else {
                  desc.classList.add("hidden");
               }
            });
         });
      });
   }, []);

   const addCompteRendu = (formData) => {
      const compteRenduForm = new FormData();
      compteRenduForm.append("idConsultation", formData.get("idConsultation"));
      compteRenduForm.append("nom", formData.get("compteRenduNom"));
      compteRenduForm.append(
         "description",
         formData.get("compteRenduDescription")
      );
      compteRenduForm.append("fichier", formData.get("compteRenduFichier"));

      //send the request

      // ......

      //data from response
      let compteRendu = {
         ...Object.fromEntries(compteRenduForm),
         idCompteRendu: Math.ceil(Math.random() * 10000),
      };

      let audio = null;
      if (formData.get("audio").size) {
         const audioForm = new FormData();
         audioForm.append("nom", formData.get("audioNom"));
         audioForm.append("description", formData.get("audioDescription"));
         audioForm.append("fichier", formData.get("audio"));

         //send the request

         // ......

         //data from response
         audio = {
            ...Object.fromEntries(audioForm),
            idAudio: Math.ceil(Math.random() * 10000),
         };
      }

      compteRendu = { ...compteRendu, audio };

      // add in redux store
      dispatch(ajouterCompteRendu(compteRendu));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      if (formData.get("idCompteRendu")) {
         console.log("update");
      } else {
         addCompteRendu(formData);
      }
   };

   const onDeleteCompteRendu = (id) => {
      const confirm = window.confirm("Vous voulez vraiment le supprimer ?");
      if (confirm) {
         //delete from database
         // ......

         dispatch(deleteCompteRendu({ idCompteRendu: id }));
      }
   };

   const onUpdateCompteRendu = (id) => {
      let compteRendu = comptesRendu.filter((c) => c.idCompteRendu == id)[0];

      formElement.current.idCompteRendu.value = compteRendu.idCompteRendu;
      formElement.current.compteRenduNom.value = compteRendu.nom;
      formElement.current.compteRenduDescription.value =
         compteRendu.description;

      if (compteRendu.audio) {
         formElement.current.idAudio.value = compteRendu.audio.idAudio;
         formElement.current.audioNom.value = compteRendu.audio.nom;
         formElement.current.audioDescription.value =
            compteRendu.audio.description;
      }

      showModal();
   };

   const onAjouterCompteRendu = () => {
      showModal();
   };

   return (
      <div ref={collapseList}>
         {/************************ les comptes rendu ************************ */}
         <div className="flex items-center  mb-8">
            <h3 id="1" className="collapse-item title__1 w-full">
               les comptes rendu
            </h3>
            <button className="button__3" onClick={onAjouterCompteRendu}>
               ajouter
            </button>
         </div>

         <div data-id="1" className="collapse-desc ">
            <table className="table__1 mb-16">
               <thead>
                  <tr>
                     <th>nom</th>
                     <th>audio</th>
                     <th>document</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {comptesRendu.map((c) => (
                     <tr key={c.idCompteRendu}>
                        <td>{c.nom}</td>
                        <td className="w-48 h-32">
                           <div className="">
                              {c.audio ? (
                                 <audio
                                    className=""
                                    controls
                                    src={audio1}
                                 ></audio>
                              ) : (
                                 <span>pas de audio</span>
                              )}
                           </div>
                        </td>
                        <td>
                           {c.fichier ? (
                              <i className="text-4xl far fa-file-pdf"></i>
                           ) : (
                              <a href="" className="lien">
                                 ajouter un fichier
                              </a>
                           )}
                        </td>
                        <td>
                           <div className="flex justify-around items-end">
                              <button
                                 onClick={() =>
                                    onUpdateCompteRendu(c.idCompteRendu)
                                 }
                              >
                                 <i className="text-4xl far fa-edit edit__icon"></i>
                              </button>
                              <button
                                 onClick={() =>
                                    onDeleteCompteRendu(c.idCompteRendu)
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
            <hr />
            <br />
         </div>

         {/* ******************************* Compte rendu Modal  *************************************** */}

         <Modal
            closeModal={hideModal}
            className={`${modalActive ? "active" : ""}`}
         >
            <div>
               <form
                  id="compte-rendu-form"
                  className="form__1"
                  onSubmit={handleSubmit}
                  ref={formElement}
               >
                  <input
                     type="number"
                     name="idConsultation"
                     defaultValue={idConsultation}
                  />
                  <input type="number" name="idCompteRendu" />
                  <div className="w-full">
                     <label htmlFor="compteRenduNom">
                        nom de compte rendu :
                     </label>
                     <input type="text" name="compteRenduNom" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">description :</label>
                     <textarea
                        name="compteRenduDescription"
                        rows={4}
                     ></textarea>
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">
                        fichier ( *.pdf, *.doc, *.docx ) :
                     </label>
                     <input type="file" name="compteRenduFichier" />
                  </div>
                  <hr />
                  <h3>audio </h3>
                  <br />
                  <input type="number" name="idAudio" />
                  <div className="w-full">
                     <label htmlFor="email">nom :</label>
                     <input type="text" name="audioNom" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">description :</label>
                     <textarea name="audioDescription" rows={4}></textarea>
                  </div>
                  <div className="w-full">
                     <label htmlFor="email">audio ( *.mp3, *.m4a ) :</label>
                     <input type="file" name="audio" />
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

export default CompteRenduList;
