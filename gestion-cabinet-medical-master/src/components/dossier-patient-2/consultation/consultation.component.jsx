import React, { useEffect, useState } from "react";
import "./consultation.styles.scss";

import audio1 from "../../../assets/audio/audio1.mp3";

const Index = () => {
   return (
      <>
         <h3 className="mb-16">Consultation du 25/11/2020 à 09h00</h3>
         <form className="form__2">
            <div className="input__group">
               <label htmlFor="">date de consultation : </label>
               <input type="text" />
            </div>
            <div className="input__group">
               <label htmlFor="">Docteur :</label>
               <input type="text" />
            </div>
            <div className="input__group">
               <label htmlFor="">Titre de consultation :</label>
               <input type="text" />
            </div>
            <br />
            <hr />
            <br />
            <div className="input__group">
               <label htmlFor="">Taille en cm :</label>
               <input type="text" />
            </div>
            <div className="input__group">
               <label htmlFor="">Poids en kg :</label>
               <input type="text" />
            </div>
            <div className="input__group">
               <label htmlFor="">Remarques :</label>
               <textarea name="remarques" id="" rows="10"></textarea>
            </div>
         </form>
      </>
   );
};

const Diagnostique = () => {
   useEffect(() => {
      const collapseitems = document.querySelectorAll(
         "#collapse-list .collapse-item"
      );

      const collapseDesc = document.querySelectorAll(
         "#collapse-list .collapse-desc"
      );

      collapseDesc.forEach((desc) => {
         desc.classList.add("hidden");
      });

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
   return (
      <>
         <div>
            <div id="collapse-list">
               {/******************* les diagnostiques audio ************************ */}
               <div className="flex items-center  mb-8">
                  <h3 id="1" className="collapse-item title__1 w-full">
                     les comptes rendu
                  </h3>
                  <button className="button__3">ajouter</button>
               </div>
               <div data-id="1" className="collapse-desc ">
                  <table className="table__1 mb-16">
                     <thead>
                        <tr>
                           <th>id</th>
                           <th>titre</th>
                           <th>audio</th>
                           <th>document</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>2</td>
                           <td>Compte rendu de consultation</td>

                           <td className="w-48">
                              <div className="">
                                 <audio
                                    className=""
                                    controls
                                    src={audio1}
                                 ></audio>
                              </div>
                           </td>
                           <td>
                              <i class="text-4xl far fa-file-pdf"></i>
                           </td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>Compte rendu d'évocation opératoire</td>

                           <td className="w-48">
                              <div className="">
                                 <audio
                                    className=""
                                    controls
                                    src={audio1}
                                 ></audio>
                              </div>
                           </td>
                           <td>
                              <a className="lien">ajouter un document</a>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <hr />
                  <br />
               </div>

               <div className="flex items-center  mb-8">
                  <h3 id="2" className="collapse-item title__1 w-full">
                     les examens
                  </h3>
                  <button className="button__3">ajouter</button>
               </div>
               <div data-id="2" className="collapse-desc ">
                  <table className="table__1 mb-16">
                     <thead>
                        <tr>
                           <th>titre</th>
                           <th>documents</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>radio</td>

                           <td>
                              <i class="text-4xl far fa-file-pdf"></i>
                           </td>

                           <td>
                              <div className="flex justify-around items-end">
                                 <button>
                                    <i className="text-4xl fas fa-eye edit__icon"></i>
                                 </button>
                                 <button>
                                    <i className="text-4xl far fa-trash-alt delete__icon"></i>
                                 </button>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <hr />
                  <br />
               </div>
            </div>
         </div>
      </>
   );
};

const Prescription = () => {
   useEffect(() => {
      const collapseitems = document.querySelectorAll(
         "#collapse-list .collapse-item"
      );

      const collapseDesc = document.querySelectorAll(
         "#collapse-list .collapse-desc"
      );

      collapseDesc.forEach((desc) => {
         desc.classList.add("hidden");
      });

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

   return (
      <>
         <form className="form__2">
            <div className="flex items-center mb-8">
               <h3 className=" w-full">list des médicaments</h3>

               <button className="button__3">ajouter</button>
            </div>

            <ul id="collapse-list" className="medicament__list">
               <div id="1" className="collapse-item medicament__title">
                  médicament 1
               </div>
               <div data-id="1" className="collapse-desc medicament__desc">
                  <div className="input__group">
                     <label htmlFor="">nom de médicament : </label>
                     <input type="text" />
                  </div>
                  <div className="input__group">
                     <label htmlFor="">description de traitement :</label>
                     <textarea name="" id="" cols="30" rows="4"></textarea>
                  </div>
                  <div className="input__group">
                     <label htmlFor="">durée de traitement :</label>
                     <input type="text" />
                  </div>
               </div>

               <div id="2" className="collapse-item medicament__title">
                  médicament 2
               </div>
               <div data-id="2" className="collapse-desc medicament__desc">
                  <div className="input__group">
                     <label htmlFor="">nom de médicament : </label>
                     <input type="text" />
                  </div>
                  <div className="input__group">
                     <label htmlFor="">description de traitement :</label>
                     <textarea name="" id="" cols="30" rows="4"></textarea>
                  </div>
                  <div className="input__group">
                     <label htmlFor="">durée de traitement :</label>
                     <input type="text" />
                  </div>
               </div>

               <div id="3" className="collapse-item medicament__title">
                  médicament 3
               </div>
               <div data-id="3" className="collapse-desc medicament__desc">
                  <div className="input__group">
                     <label htmlFor="">nom de médicament : </label>
                     <input type="text" />
                  </div>
                  <div className="input__group">
                     <label htmlFor="">description de traitement :</label>
                     <textarea name="" id="" cols="30" rows="4"></textarea>
                  </div>
                  <div className="input__group">
                     <label htmlFor="">durée de traitement :</label>
                     <input type="text" />
                  </div>
               </div>
            </ul>

            <br />
            <hr />
            <br />
            <div className="input__group">
               <label htmlFor="">conseils medicaux :</label>
               <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>

            <script type="javascript">console.log("aze");</script>
         </form>
      </>
   );
};

function Consultation(props) {
   const [Route, setRoute] = useState("index");

   const changeRoute = (route, e) => {
      setRoute(route);
      const navLinks = document.querySelectorAll(".navbar__1 .link");

      navLinks.forEach((link) => {
         link.classList.remove("active");
      });
      e.target.classList.add("active");
   };

   return (
      <div>
         <nav className="navbar__1">
            <a className="link active" onClick={(e) => changeRoute("index", e)}>
               Consultation
            </a>
            <a className="link" onClick={(e) => changeRoute("diagnostique", e)}>
               Diagnostique
            </a>
            <a className="link" onClick={(e) => changeRoute("prescription", e)}>
               Prescription
            </a>
         </nav>
         {Route === "index" ? (
            <Index />
         ) : Route === "diagnostique" ? (
            <Diagnostique />
         ) : Route === "prescription" ? (
            <Prescription />
         ) : (
            <></>
         )}
      </div>
   );
}

export default Consultation;
