import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import Antecedents from "../antecedents/antecedents.component";
import ConsultationList from "../consultation-list/consultation-list";

import Consultation from "../consultation/consultation.component";
import DossierAdministratif from "../dossier-administratif/dossier-administratif.component";
import ElementSanteList from "../element-sante-list/element-sante-list";

import "./dossier-patient.styles.scss";

function DossierPatient(props) { 
   const idPatient = props.match.params.id;
   const patient = useSelector((state) => {
      return state.patient.filter((p) => p.idUtilisateur == idPatient)[0];
   });

   let consultations = useSelector((state) => state.consultation);

   consultations = useSelector((state) => {
      var list = new Array();
      state.elementSante.map((ele) => {
         if (ele.idPatient == idPatient) {
            list = [
               ...list,
               ...consultations.filter((c) => c.idElement == ele.idElement),
            ];
         }
      });
      return list;
   });

   useEffect(() => {
      if (!patient) {
         console.log("patient not exist");
         // redirect to not found page
      }
      const navLinks = document.querySelectorAll(
         "#dossier-sidebar .menu .link"
      );

      navLinks.forEach((link) => {
         link.addEventListener("click", (e) => {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });
            e.target.classList.add("active");
         });
      });
   }, []);

   return (
      <div>
         <div id="dossier-sidebar" className="sidebar h-screen">
            <div className="p-8">
               <Link to="/secretaire" className="lien__2">
                  <i className="far fa-hand-point-left"></i>page d'accueil
               </Link>
            </div>
            <div className="p-8 mb-16">
               <h3 className="text-center font-semibold mb-12">
                  Dossier Patient
               </h3>
               <h5 className="text-center font-semibold mb-2">{`${patient.nom} ${patient.prenom}`}</h5>
               <h6 className="text-center font-semibold">Age : 25 ans</h6>
            </div>
            <ul className="menu">
               <li>
                  <Link to={`${props.match.url}`} className="link active">
                     Dossier Administratif
                  </Link>
               </li>
               <li>
                  <Link to={`${props.match.url}/consultation`} className="link">
                     Consultations
                  </Link>
               </li> 
               <li>
                  <Link to={`${props.match.url}/antecedents/${idPatient}`} className="link">
                     Antecedents
                  </Link>
               </li>
               <li>
                  <Link
                     to={`${props.match.url}/element-sante`}
                     className="link"
                  >
                     Elements santé
                  </Link>
               </li>
            </ul>
         </div>
         <div className="content p-8">
            <Switch>
               <Route
                  exact
                  path={`${props.match.url}`}
                  component={() => <DossierAdministratif patient={patient} />}
               />
               <Route
                  exact
                  path={`${props.match.url}/consultation`}
                  component={(props) => (
                     <ConsultationList
                        consultations={consultations}
                        {...props}
                     />
                  )}
               />
               <Route
                  path={`${props.match.url}/consultation/:id`}
                  component={Consultation}
               />
               
               <Route
                  exact
                  path={`${props.match.url}/antecedents/:id`}
                  component={Antecedents}

               /> 
               <Route
                  path={`${props.match.url}/element-sante`}
                  component={() => <ElementSanteList idPatient={idPatient} />}
               />
            </Switch>
            <br />
            <br />
            <br />
         </div>
      </div>
   );
}

export default DossierPatient;
