import React from "react";
import { Switch, Route } from "react-router-dom";
import DossierPatient from "../components/dossier-patient/dossier-patient.component";
import Sidebar from "../pages/medecin/Sidebar";
import HomePage from "../pages/medecin/home-page/home-page.component";
import RendezVous from "../pages/medecin/rendez-vous/rendez-vous";

function MedecinRoute() {
   return (
      <div className="secretaire">
         <Switch>
            <Route path="/medecin/dossier/:id" component={DossierPatient} />
            <Route>
               <Sidebar />
               <div className="content">
                  <Switch>
                     <Route exact path="/medecin" component={HomePage} />
                     <Route
                        exact
                        path="/medecin/rendez-vous"
                        component={RendezVous}
                     />
                  </Switch>
               </div>
            </Route>
         </Switch>
      </div>
   );
}

export default MedecinRoute;
