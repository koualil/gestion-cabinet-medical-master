import { BASE_URL } from "../../api/api";
import PATIENTS_DATA from "./patients-data";

//const INITIAL_STATE = PATIENTS_DATA;

const INITIAL_STATE = [];

const PatientsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_PATIENTS_DATA":
         return action.payload;
      case "AJOUTER_PATIENT":
         return [...state, action.payload];

      case "UPDATE_PATIENT":
         return state.map((p) => {
            if (p.idUtilisateur == action.payload.idUtilisateur) {
               return action.payload;
            } else {
               return p;
            }
         });
      case "DELETE_PATIENT":
         return state.filter(
            (p) => p.idUtilisateur != action.payload.idUtilisateur
         );
      default:
         return state;
   }
};

export default PatientsReducer;
