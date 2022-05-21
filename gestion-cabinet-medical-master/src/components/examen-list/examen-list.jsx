import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../api/api";
import Modal from "../utils/modal__1/modal__1.component";

function ExamenList({ idConsultation }) {
   const [NbDocuments, setNbDocuments] = useState(2);
   const dispatch = useDispatch();
   const formElement = useRef();
   const collapseList = useRef();

   const examens = useSelector((state) =>
      state.examen.filter((c) => c.idConsultation == idConsultation)
   );

   const initializeForm = () => {
      formElement.current
         .querySelectorAll("input, textarea")
         .forEach((elem) => {
            elem.value = "";
         });

      formElement.current.idConsultation.value = idConsultation;
   };

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

   useEffect(() => {
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

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(formElement.current);
      const json = Object.fromEntries(formData);

      fetch(BASE_URL + "/test.php", {
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
            console.log(data);
         })
         .catch((err) => {});

      console.log(json);
   };

   const onAjouterExamen = () => {
      showModal();
   };

   const increaseNbDocuments = () => {
      setNbDocuments(NbDocuments + 1);
   };

   const decreaseNbDocuments = () => {
      if (NbDocuments > 1) {
         setNbDocuments(NbDocuments - 1);
      }
   };

   return (
      <div ref={collapseList}>
         {/************************ les examens ************************ */}

         <div className="flex items-center  mb-8">
            <h3 id="3" className="collapse-item title__1 w-full">
               les examens
            </h3>
            <button className="button__3" onClick={onAjouterExamen}>
               ajouter
            </button>
         </div>
         <div data-id="3" className="collapse-desc ">
            <table className="table__1 mb-16">
               <thead>
                  <tr>
                     <th>nom</th>
                     <th>documents</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {examens.map((e) => (
                     <tr key={e.idExamen}>
                        <td>{e.nom}</td>
                        <td>
                           {e.documents.map((d) => (
                              <>
                                 <div className="mb-2">
                                    <i className="text-4xl far fa-file-pdf mr-3"></i>
                                    {d.nom}
                                 </div>
                              </>
                           ))}
                        </td>

                        <td>
                           <div className="flex justify-around items-end">
                              <button>
                                 {/* <i className="text-4xl fas fa-eye edit__icon"></i> */}
                                 <i className="text-4xl far fa-edit edit__icon"></i>
                              </button>
                              <button>
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

         {/* ******************************* Modal  *************************************** */}
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
                  <input type="number" name="idExamen" />
                  <div className="w-full">
                     <label htmlFor="nom">nom d'examen :</label>
                     <input type="text" name="nom" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="description">description :</label>
                     <textarea name="description" rows={4}></textarea>
                  </div>
                  <div className="w-full">
                     <div className="flex mb-4 items-center">
                        <label htmlFor="email">nombre de document </label>
                        <div className="">
                           <button
                              onClick={decreaseNbDocuments}
                              className="px-4 pb-1 text-4xl mx-4 border"
                           >
                              -
                           </button>
                           <span>{NbDocuments}</span>
                           <button
                              onClick={increaseNbDocuments}
                              className="px-4 pb-1 text-4xl mx-4 border"
                           >
                              +
                           </button>
                        </div>
                     </div>

                     {[...Array(NbDocuments)].map((e, i) => (
                        <input key={i} type="file" name={`fichiers[]`} />
                     ))}
                  </div>
                  <hr />
                  <br />
                  <button className="button__1" type="submit">
                     Ajouter
                  </button>
               </form>
            </div>
         </Modal>
      </div>
   );
}

export default ExamenList;
