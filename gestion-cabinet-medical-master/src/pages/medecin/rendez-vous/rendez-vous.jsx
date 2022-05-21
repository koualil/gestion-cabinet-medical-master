import React from "react";
import { Link } from "react-router-dom";

function RendezVous() {
   return (
      <div className="p-8">
         <h3 className="mb-6">Mes Rendez-vous</h3>
         <table className="table__1 ">
            <thead>
               <tr>
                  <th>CIN</th>
                  <th>nom et prenom</th>
                  <th>date</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>BR3457</td>
                  <td>Khalid loui</td>
                  <td>Aujourd'hui 15:00</td>
                  <td>
                     <Link className="lien" to="/medecin/dossier/12">
                        le dossier de patient
                     </Link>
                  </td>
               </tr>
               <tr>
                  <td>BR3457</td>
                  <td>amine koulali</td>
                  <td>12-06-2022 15:00</td>
                  <td>
                     <a className="lien" href="">
                        le dossier de patient
                     </a>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default RendezVous;
