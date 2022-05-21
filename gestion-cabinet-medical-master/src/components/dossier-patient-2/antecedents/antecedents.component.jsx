import React, { useEffect } from "react";

import "./antecedents.styles.scss";

const AntecedentItem = () => {
   return (
      <div className="antecedent__item">
         <h4>Psychologie</h4>
         <p>
            conflit à l'école avec ses copains : ne supporte pas d'être mis à
            l'écart / frustrations
         </p>
         <div className="flex justify-end">
            <span>il y'a 2 ans</span>
         </div>
      </div>
   );
};

function Antecedents() {
   useEffect(() => {
      const collapseitems = document.querySelectorAll(
         "#collapse-list .collapse-item"
      );

      const collapseDesc = document.querySelectorAll(
         "#collapse-list .collapse-desc"
      );

      collapseitems.forEach((c) => {
         c.addEventListener("click", (e) => {
            collapseDesc.forEach((desc) => {
               if (desc.getAttribute("data-id") === e.target.id) {
                  desc.classList.toggle("hidden");
               }
            });
         });
      });
   }, []);

   return (
      <div>
         <div id="collapse-list">
            {/* 
            ANTÉCÉDENTS TRAUMAS :
            -une expérience profondément pénible ou troublante.

            ANTÉCÉDENTS MÉDICAUX

            ANTÉCÉDENTS FAMILIAUX

            ANTÉCÉDENTS PSYCHOLOGIQUES

            ANTÉCÉDENTS CHIRURGICAUX
 */}
            {/******************* les diagnostiques audio ************************ */}
            <div className="flex justify-end mb-8">
               <button className="button__1 h-auto">
                  ajouter un antécédent
               </button>
            </div>

            <h3 id="1" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS MÉDICAUX
            </h3>
            <div data-id="1" className="collapse-desc">
               <div className="antecedent__item">
                  <h4>Vaccins</h4>
                  <p>DTP</p>
                  <div className="flex justify-end">
                     <span>il y'a 2 ans</span>
                  </div>
               </div>
               <AntecedentItem />
               <hr />
               <br />
            </div>

            <h3 id="2" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS PSYCHOLOGIQUES
            </h3>
            <div data-id="2" className="collapse-desc">
               <AntecedentItem />

               <hr />
               <br />
            </div>

            <h3 id="3" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS FAMILIAUX
            </h3>
            <div data-id="3" className="collapse-desc">
               <AntecedentItem />

               <hr />
               <br />
            </div>

            <h3 id="4" className="collapse-item title__1 mb-8">
               Autres
            </h3>
            <div data-id="4" className="collapse-desc">
               <AntecedentItem />

               <hr />
               <br />
            </div>
         </div>
      </div>
   );
}

export default Antecedents;
