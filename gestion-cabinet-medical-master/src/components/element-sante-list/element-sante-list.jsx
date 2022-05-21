import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { BASE_URL } from "../../api/api";
import {
   ajouterElementSante,
   deleteElementSante,
} from "../../redux/elementSante/elementSante.actions";
import ConsultationList from "../consultation-list/consultation-list";
import Consultation from "../consultation/consultation.component";
import ElementSante from "../element-sante/element-sante.component";
import Modal from "../utils/modal__1/modal__1.component";
import MyDataTable from "../utils/my-data-table/my-data-table";

import { createStructuredSelector } from "reselect";

import "./element-sante-list.scss";
import { selectElementSanteByPatient } from "../../redux/elementSante/elementSante.selectors";

const Index = ({ idPatient }) => {
   const [filteredItems, setFilteredItems] = useState([]);
   const [searchInputValue, setSearchInputValue] = useState("");
   const [Operation, setOperation] = useState("Ajouter");

   const ElementSanteData = useSelector((state) =>
      selectElementSanteByPatient(state, idPatient)
   );

   const match = useRouteMatch();
   const formElement = useRef();
   const dispatch = useDispatch();

   const [modalActive, setModalActive] = useState(false);
   const showModal = () => {
      setModalActive(true);
      document.querySelector("body").classList.add("modal__active");
   };

   const hideModal = () => {
      setModalActive(false);
      document.querySelector("body").classList.remove("modal__active");
   };

   const columns = [
      {
         name: "nom",
         selector: (row) => row.nom,
         sortable: true,
      },
      {
         name: "description",
         selector: (row) => row.description,
         sortable: true,
      },
      {
         name: "dateCreation",
         selector: (row) => row.dateCreation,
         sortable: true,
      },
      {
         name: "",
         cell: (row) => (
            <>
               <Link to={`${match.url}/${row.idElement}`} className="lien">
                  <i className="text-4xl far fa-eye edit__icon"></i>
               </Link>
               <button onClick={() => onDelete(row.idElement)}>
                  <i className="text-4xl far fa-trash-alt delete__icon"></i>
               </button>
            </>
         ),
         width: "120px",
         style: {
            display: "flex",
            justifyContent: "space-around",
         },
      },
   ];

   useEffect(() => {
      setFilteredItems(
         ElementSanteData.filter((m) =>
            m.nom.toLowerCase().includes(searchInputValue.toLowerCase())
         )
      );
   }, [searchInputValue, ElementSanteData]);

   const initializeForm = () => {
      setOperation("Ajouter");

      formElement.current.idElement.value = "";
      formElement.current.nom.value = "";
      formElement.current.description.value = "";
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      if (formData.get("idElement") == "") {
         console.log("ajouter");

         //ajouter
         try {
            const res = await fetch(BASE_URL + "/api/element-sante/post.php", {
               method: "post",
               body: formData,
            });

            if (res.status === 200) {
               const data = await res.json();
               dispatch(ajouterElementSante(data));

               hideModal();
            }
         } catch (error) {
            console.log("erreur");
         }
      } else {
         //modifier
         console.log("modifier");
      }
   };

   const onAjoute = () => {
      initializeForm();
      showModal();
   };

   const onDelete = async (id) => {
      try {
         const res = await fetch(
            BASE_URL + "/api/element-sante/delete.php?id=" + id
         );

         if (res.status === 200) {
            //setServiceData(ServiceData.filter((i) => i.idElement != id));
            dispatch(deleteElementSante({ idElement: id }));
            hideModal();
         }
      } catch (error) {
         console.log("erreur");
      }
   };

   return (
      <div className="">
         <h2 className="title__1">Les element santés </h2>
         <br />
         <div className="flex justify-between mb-8">
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="w-5 h-5 text-gray-500 fas fa-search"></i>
               </div>
               <input
                  type="text"
                  id="table-search"
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                  className="search__input "
                  placeholder="Search for items"
               />
            </div>
            <div>
               <button onClick={onAjoute} className="button__1">
                  Ajouter
               </button>
            </div>
         </div>
         <hr />
         <br />
         <div className="shadow-sm">
            <MyDataTable
               columns={columns}
               data={filteredItems}
               defaultSortField="idElement"
               striped
               pagination
            />
         </div>

         {/* *******************************  Modal  *************************************** */}

         <Modal
            closeModal={hideModal}
            className={`${modalActive ? "active" : ""}`}
         >
            <div>
               <form
                  ref={formElement}
                  className="form__1"
                  onSubmit={handleSubmit}
               >
                  <input
                     hidden
                     type="number"
                     name="idPatient"
                     defaultValue={idPatient}
                  />
                  <input hidden type="number" name="idElement" />
                  <div className="w-full">
                     <label htmlFor="nom">nom :</label>
                     <input type="text" name="nom" />
                  </div>
                  <div className="w-full">
                     <label htmlFor="nom">description :</label>
                     <textarea rows={5} name="description"></textarea>
                  </div>

                  <button className="button__1" type="submit">
                     {Operation}
                  </button>
               </form>
            </div>
         </Modal>
      </div>
   );
};

function ElementSanteList({ idPatient }) {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route
            exact
            path={`${match.url}`}
            component={() => <Index idPatient={idPatient} />}
         />

         <Route path={`${match.url}/:id`} component={ElementSante} />
      </Switch>
   );
}

export default ElementSanteList;
