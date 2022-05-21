import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Consultation from "../consultation/consultation.component";

const ConsulationsData = [
   {
      idConsultation: 2,
      date: "3/4/2022",
      type: "Visite",
   },
   {
      idConsultation: 4,
      date: "3/4/2022",
      type: "Controle",
   },
   {
      idConsultation: 9,
      date: "3/4/2022",
      type: "Visite",
   },
   {
      idConsultation: 7,
      date: "3/4/2022",
      type: "Visite",
   },
];

const Index = (props) => {
   console.log(props);
   return (
      <>
         <div className="flex justify-between mb-8">
            <div class="relative">
               <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="w-5 h-5 text-gray-500 fas fa-search"></i>
               </div>
               <input
                  type="text"
                  id="table-search"
                  class="search__input"
                  placeholder="Search for items"
               />
            </div>
            <button className="button__1">ajouter une consultation</button>
         </div>
         <hr />
         <br />
         <h3 className="mb-4">liste des consultations</h3>
         <table className="table__1 mb-16">
            <thead>
               <tr>
                  <th>id</th>
                  <th>date</th>
                  <th>type</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {ConsulationsData.map((c, index) => (
                  <tr>
                     <td>{c.idConsultation}</td>
                     <td>{c.date}</td>
                     <td>{c.type}</td>
                     <td>
                        <div className="flex justify-around items-end">
                           <Link
                              to={`${props.match.url}/${c.idConsultation}`}
                              className="lien"
                           >
                              consulter
                           </Link>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <div>
            <h3>Notes Professionelles</h3>
         </div>
      </>
   );
};

function ElementSante(props) {
   const [Data, setData] = useState([]);

   return (
      <div>
         <Switch>
            <Route exact path={`${props.match.url}`} component={Index} />

            <Route
               exact
               path={`${props.match.url}/:id`}
               component={Consultation}
            />
         </Switch>
      </div>
   );
}

export default ElementSante;
