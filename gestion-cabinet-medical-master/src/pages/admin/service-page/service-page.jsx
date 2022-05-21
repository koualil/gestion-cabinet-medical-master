import React, { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../../api/api";
import MyDataTable from "../../../components/utils/my-data-table/my-data-table";
import Modal from "../../../components/utils/modal__1/modal__1.component";

function ServicePage() {
   const [modifier , setmodifier] = useState(false);
   const [filteredItems, setFilteredItems] = useState([]);
   const [ServiceData, setServiceData] = useState([]);
   const [searchInputValue, setSearchInputValue] = useState("");
   const [Operation, setOperation] = useState("Ajouter");

   const formElement = useRef();

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
         name: "idService",
         selector: (row) => row.idService,
         sortable: true,
      },
      {
         name: "nom",
         selector: (row) => row.nom,
         sortable: true,
      },
      {
         name: "",
         cell: (row) => (
            <>
               <button onClick={() => onModifier(row)}>
                  <i className="text-4xl far fa-edit edit__icon mr-4"></i>
               </button>   
               <button onClick={() => onDelete(row.idService)}>
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
      console.log(ServiceData);
      setFilteredItems(
         ServiceData.filter((m) =>
            m.nom.toLowerCase().includes(searchInputValue.toLowerCase())
         )
      );
   }, [searchInputValue, ServiceData]);
   useEffect(() => {
      fetch(BASE_URL + "/api/service/getAll.php")
         .then((res) => res.json())
         .then((data) => {
            setServiceData(data);
         });
   }, []);

   const initializeForm = () => {
      formElement.current.idService.value = "";
      formElement.current.nom.value = "";
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      if (formData.get("idService") == "") {
         //ajouter
         try {
            const res = await fetch(BASE_URL + "/api/service/post.php",{
               method: "post",
               body: formData,
            });

            if (res.status === 200) {
               const data = await res.json();
                
               setServiceData([...ServiceData, data]);
               console.log(data);
               hideModal();
            }
         } catch (error) {
            console.log("erreur");
         }
      } else {
         //modifier
         
         try{ 
            const res = await fetch(BASE_URL + "/api/service/update.php" , {
            method :"post",
            body : formData,
         });
         const formJson = Object.fromEntries(formData);

         console.log(formJson);
         if(res.status === 200){
            const data = await res.json();
            console.log(data);
         
         //   fetch(BASE_URL + "/api/service/getAll.php")
         //   .then((res) => res.json())
         //   .then((data1) => {
         //      setFilteredItems(data1);
         //   });

            setFilteredItems(filteredItems.map(s => {
               if(s.idService == formJson.idService){
                  return formJson
               }else{
                  return s
               }
            }))
           console.log(filteredItems);
            hideModal();
         }
         }catch(error){
            console.log("erreur"+error);
         }
         
      
      }
   };

   const onAjoute = () => {
      setmodifier(false);
      showModal();
      initializeForm();
   };

   const onModifier = (ele) => {
      console.log(ele);
      setmodifier(true);
      formElement.current.idService.value = ele.idService;
      formElement.current.nom.value = ele.nom;
      showModal();
   };

   const onDelete = async (id) => {
      try {
         const res = await fetch(BASE_URL + "/api/service/delete.php?id=" + id);

         if (res.status === 200) {
            setServiceData(ServiceData.filter((i) => i.idService != id));
         }
      } catch (error) {
         console.log("erreur");
      }
   };

   const onSearch = (e) => {
      const mot = e.target.value;
      // setFilteredItems(
      //    medecins.filter(
      //       (m) =>
      //          m.cin.toLowerCase().includes(mot.toLowerCase()) ||
      //          m.nom.toLowerCase().includes(mot.toLowerCase()) ||
      //          m.prenom.toLowerCase().includes(mot.toLowerCase())
      //    )
      // );
   };

   return (
      <div className="p-8">
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
               defaultSortField="nom"
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
                  <input hidden type="number" name="idService" />
                  <div className="w-full">
                     <label htmlFor="nom">nom :</label>
                     <input type="text" name="nom" placeholder="nom" />
                  </div>
                  { modifier ? <button className="button__1" type="submit">
                     Modifier
                    </button>  : 
                    <button className="button__1" type="submit">
                     Ajouter
                     </button>
                  }
               </form>
            </div>
         </Modal>
      </div>
   );
}

export default ServicePage;
