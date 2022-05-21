import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import { BASE_URL } from "../../api/api";
import { modifierElementSante } from "../../redux/elementSante/elementSante.actions";
import {
   setNotificationOff,
   setNotificationOn,
} from "../../redux/notification/notification.actions";
import ConsultationList from "../consultation-list/consultation-list";
import Consultation from "../consultation/consultation.component";

const Index = ({ match }) => {
   const dispatch = useDispatch();

   const idElement = match.params.id;

   const ElementSante = useSelector(
      (state) => state.elementSante.filter((e) => e.idElement == idElement)[0]
   );

   const consultations = useSelector((state) =>
      state.consultation.filter((c) => c.idElement == idElement)
   );

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formJson = Object.fromEntries(formData);

      console.log("ajouter");

      //ajouter
      try {
         const res = await fetch(BASE_URL + "/api/element-sante/put.php", {
            method: "post",
            body: formData,
         });

         if (res.status === 200) {
            const data = await res.json();
            dispatch(modifierElementSante({ ...ElementSante, ...formJson }));
            dispatch(
               setNotificationOn({
                  message: "Modification avec success",
                  time: 3000,
               })
            );
            // setTimeout(() => {
            //    dispatch(setNotificationOff());
            // }, 2000);
         }
      } catch (error) {
         console.log("erreur");
      }
   };

   return (
      <>
         <div>
            <h2 className="title__1">Element Santé : {ElementSante.nom}</h2>
            <br />
            <form action="" className="form__2" onSubmit={handleSubmit}>
               <input
                  type="number"
                  name="idElement"
                  defaultValue={ElementSante.idElement}
                  hidden
               />
               <input
                  type="number"
                  name="idPatient"
                  defaultValue={ElementSante.idPatient}
                  hidden
               />
               <div className="flex items-start mb-12">
                  <label htmlFor="tel" className="w-48 font-extrabold">
                     nom :
                  </label>
                  <input
                     type="text"
                     name="nom"
                     defaultValue={ElementSante.nom}
                  />
               </div>
               <div className="flex items-start mb-12">
                  <label htmlFor="tel" className="w-48 font-extrabold">
                     creer on :
                  </label>
                  <input
                     type="date"
                     name="dateCreation"
                     defaultValue={ElementSante.dateCreation}
                     disabled
                  />
               </div>
               <div className="flex items-start">
                  <label htmlFor="adresse" className="w-48 font-extrabold">
                     description :
                  </label>
                  <textarea
                     name="description"
                     rows="6"
                     defaultValue={ElementSante.description}
                  ></textarea>
               </div>
               <br />
               <button className="button__1" type="submit">
                  Enregister
               </button>
            </form>
         </div>

         <br />
         <hr className="" />
         <br />
         <br />
         <ConsultationList
            idElement={idElement}
            consultations={consultations}
         />
      </>
   );
};

function ElementSante(props) {
   const match = useRouteMatch();

   return (
      <div>
         <Switch>
            <Route
               exact
               path={`${match.url}`}
               component={() => <Index match={match} />}
            />

            <Route exact path={`${match.url}/:id`} component={Consultation} />
         </Switch>
      </div>
   );
}

export default ElementSante;
