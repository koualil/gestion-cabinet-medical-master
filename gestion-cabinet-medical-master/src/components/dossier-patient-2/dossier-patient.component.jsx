import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

import DossierAdministratif from "./dossier-administratif/dossier-administratif.component";
import Antecedents from "./antecedents/antecedents.component";
import ElementSante from "./element-sante/element-sante.component";

import "./dossier-patient.styles.scss";

function DossierPatient(props) {
   useEffect(() => {
      const navLinks = document.querySelectorAll(
         "#dossier-sidebar .menu .link"
      );

      navLinks.forEach((link) => {
         link.addEventListener("click", (e) => {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });
            console.log("aze");
            e.target.classList.add("active");
         });
      });
   }, []);

   return (
      <div>
         <div id="dossier-sidebar" className="sidebar h-screen">
            <div className="p-8">
               <Link to="/secretaire" className="lien__2">
                  <i class="far fa-hand-point-left"></i>page d'accueil
               </Link>
            </div>
            <div className="p-8 mb-16">
               <h3 className="text-center font-semibold mb-12">
                  Dossier Patient
               </h3>
               <h5 className="text-center font-semibold mb-2">Nom et prenom</h5>
               <h6 className="text-center font-semibold">Age : 25 ans</h6>
            </div>
            <ul className="menu">
               <li>
                  <Link to={`${props.match.url}`} className="link active">
                     Dossier Administratif
                  </Link>
               </li>
               <li>
                  <Link to={`${props.match.url}/antecedents`} className="link">
                     Antécédents
                  </Link>
               </li>
               <li>
                  <div className="mx-8 mb-4 flex justify-between">
                     <span className="text-slate-500">Elements Santés</span>
                     <button className="px-2 rounded-full text-white bg-blue-500 hover:bg-blue-600">
                        <i class="fas fa-plus"></i>
                     </button>
                  </div>
                  <ul className="dropdown__list">
                     <Link to={`${props.match.url}/12`} className="link">
                        Element santé 1
                     </Link>
                     <Link to={`${props.match.url}/165`} className="link">
                        Element santé 2
                     </Link>
                     <Link to={`${props.match.url}/43`} className="link">
                        Element santé 3
                     </Link>
                  </ul>
               </li>
            </ul>
         </div>
         <div className="content p-8">
            <Switch>
               <Route
                  exact
                  path={`${props.match.url}`}
                  component={DossierAdministratif}
               />

               <Route
                  exact
                  path={`${props.match.url}/antecedents`}
                  component={Antecedents}
               />
               <Route
                  path={`${props.match.url}/:id`}
                  component={ElementSante}
               />
            </Switch>
         </div>
      </div>
   );
}

export default DossierPatient;
