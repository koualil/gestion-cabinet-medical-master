import React, { useEffect, useState,useRef } from "react";
import Modal from "../utils/modal__1/modal__1.component";
import "./antecedents.styles.scss";
import { BASE_URL } from "../../api/api"; 
import { useDispatch, useSelector } from "react-redux";
import { postAntecedent , updateAntecedent,deleteAntecedent} from "../../redux/antecedant/antecedent.actions";
import ModalDelete from "../utils/modalDelete/modalDelete";


const AntecedentItem = ({item,showModal,formElement}) => {
    const dispatch = useDispatch();
    const [showModalDelete, setShowModalDelete] = useState(false);
   //   const data = props.item
  
   const OnUpdate =()=>{
      
      console.log(formElement.current.nom);
      formElement.current.idAntecedent.value = item.idAntecedent;
      formElement.current.nom.value = item.nom;
      formElement.current.description.value = item.description;
      formElement.current.type.value = item.type;
      formElement.current.idPatient.value = item.idPatient;
       
      showModal();
   }
   const Ondelete =async (id)=>{ 
      // setShowModalDelete(true);
      const resultat = window.confirm(" Voulez-vous supprimer l'anrécédent !");
      if(resultat){
      try{  
         const rep = await fetch(BASE_URL +"/api/Component/Antecedents/delete.php?id="+id,{
            method : "post"
         })
         if(rep.status === 200){ 
            console.log(item);
            dispatch(deleteAntecedent(item));
         }
      }
      catch(error){
         console.log(error);
      } 
   }
   }
   return (
      <>
      <div className="antecedent__item">
         <h4>{item.nom}</h4>
         <div className="flex justify-end">
            <button className="mr-5" >
               <i className="text-4xl far fa-edit edit__icon" onClick={OnUpdate}></i>
            </button>
            <button className="mr-5">
            <i className="text-4xl far fa-trash-alt delete__icon" onClick={()=>Ondelete(item.idAntecedent)}></i>
            </button>
         </div>
         <p>
         {item.description} 
         </p>
      </div>
      {/* {showModalDelete ? <ModalDelete toggle={showModalDelete} setShowModalDelete={setShowModalDelete} /> : null } */}
      </>
   );
}; 
 
function Antecedents(props) {
   const idPatient = props.match.params.id; 
   const formElement = useRef();
   const [modalActive, setModalActive] = useState(false);
   const dispatch = useDispatch();
   
   const showModal=()=>{
      setModalActive(true);
      document.querySelector("body").classList.add("modal__active");
   }
   const hideModal = () => {
      setModalActive(false);
      document.querySelector("body").classList.remove("modal__active");
      initialise();
   };
 
   const initialise=()=>{
      const element = formElement;
   
      document
      .querySelectorAll(
         "#medecinForm input, #medecinForm textarea, #medecinForm select"
      )
      .forEach((elem) => {
         elem.value = "";
      });
   }
     //fetch All
   const antecedentData = useSelector(state => state.antecedent);
  
   // Remplir database 
   //   console.log(formElement.current.nom.value );
   const HandlSubmit= async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(formData);
       
   if(formData.get('idAntecedent') == ''){
      console.log(formData.get('nom'));
      //Ajout 
      try{  
         const rep = await fetch(BASE_URL + "/api/Component/Antecedents/post.php", {
            method : "post" ,
            body : formData ,
         });
          
          if (rep.status === 200){
            const data = await rep.json();  
            console.log(data);
            // ajouter sur redux
            dispatch(postAntecedent(data));
            hideModal();
            initialise();
      
          }  
         }
         catch(error ){
            console.log("error"+error);
         }
   }
   //Modifie
   else{
      try{
         const rep = await fetch(BASE_URL + "/api/Component/Antecedents/put.php",{
            method : "post",
            body: formData
         });
         if (rep.status === 200){
            const data = await rep.json();  
             dispatch(updateAntecedent(data));
             
             hideModal();
            // ajouter sur redux
                     
          }         
      }
   
   catch(error){
      console.log("error"+error);
   }

    }
   }
 
   //
   useEffect(() => {
      const collapseitems = document.querySelectorAll(
         "#collapse-list .collapse-item"
      );

      const collapseDesc = document.querySelectorAll(
         "#collapse-list .collapse-desc"
      );
      // toggle
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
      <div id="medecinForm">
         <div id="collapse-list">
            {/******************* les diagnostiques audio ************************ */}
            <div className="flex justify-end mb-8">
               <button className="button__1 h-auto" onClick={showModal} >
                  ajouter un antécédent
               </button>
            </div>



            <h3 id="1" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS MÉDICAUX
            </h3>
            <div data-id="1" className="collapse-desc">

           
                { 
                   antecedentData.filter(value => value.type == "medical").map(element =>(     
                     <AntecedentItem key={element.idAntecedent} item={element} formElement={formElement} showModal={showModal}  />
                   ))
                   
                }
              
               <hr />
               <br />
            </div>

            <h3 id="2" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS PSYCHOLOGIQUES
            </h3>
            <div data-id="2" className="collapse-desc">
            {
                   antecedentData.filter(value =>value.type == "psychologue").map(element =>(
                     <AntecedentItem key={element.idAntecedent} item={element} formElement={formElement} showModal={showModal}  />
                   ))
                }

               <hr />
               <br />
            </div>

            <h3 id="3" className="collapse-item title__1 mb-8">
               ANTÉCÉDENTS FAMILIAUX
            </h3>
            <div data-id="3" className="collapse-desc">
              {
                   antecedentData.filter(value =>value.type == "familial").map(element =>(
                     <AntecedentItem key={element.idAntecedent} item={element} formElement={formElement} showModal={showModal} />
                   ))
               }


               <hr />
               <br />
            </div>
            
            <h3 id="4" className="collapse-item title__1 mb-8">
            ntécédent de traumatisme
            </h3>
            <div data-id="4" className="collapse-desc">
               
              {
                   antecedentData.filter(value =>value.type == "traumas").map(element =>(
                     <AntecedentItem key={element.idAntecedent} item={element} formElement={formElement} showModal={showModal}  />
                   ))
               }
               <hr />
               <br />
            </div>
           
            <h3 id="5" className="collapse-item title__1 mb-8">
               Autres
            </h3>
            <div data-id="5" className="collapse-desc">
            {
               antecedentData.filter(value =>value.type == "autre").map(element =>(
               <AntecedentItem key ={element.idAntecedent} item={element} formElement={formElement} showModal={showModal} />
                   ))
               }


               <hr />
               <br />
            </div>
         </div>
      <Modal 
         closeModal={hideModal}
         className={`${modalActive ? "active" : ""}`}
      >
          
      <form
      ref={formElement}
      className="form__1"
      onSubmit={HandlSubmit}
      >
         <input hidden type="number" name="idAntecedent"/>
         <div className="w-full">
              <label htmlFor="nom">Titre :</label>
              <input type="text" name="nom" placeholder="nom" />
         </div>
         <div className="w-full ">
              <label htmlFor="nom">description :</label>
              <textarea  type="text" name="description" placeholder="Your Message" rows={5}
              >
              </textarea>
         </div> 
         <div className="w-full">
            <select name="type">
             <option>Choisir...</option>
             <option value="medical">ANTÉCÉDENTS MÉDICAUX</option>  
             <option value="psychologue">ANTÉCÉDENTS PSYCHOLOGIQUES</option>  
             <option value="familial">ANTÉCÉDENTS FAMILIAUX</option>  
             <option value="traumas">ANTECEDENTS DE TRAUMATISME</option>  
             <option value="autre"> Autres</option>  
            </select> 
           
         </div>        
         <input hidden type="number" name="idPatient" value={idPatient} readOnly/>
         <button className="button__1" type="submit" >
           Ajouter
         </button>
         </form>
      
      </Modal>
      </div>
   );
}
export default Antecedents;