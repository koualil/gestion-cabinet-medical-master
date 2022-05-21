const INITIAL_STATE = [];

const PrescriptionReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_PRESCRIPTION_DATA":
         return action.payload;
      case "AJOUTER_PRESCRIPTION":
         return [...state, action.payload];
      case "MODIFIER_PRESCRIPTION":
         return state.map((p) => {
            if (p.idPrescription == action.payload.idPrescription) {
               return action.payload;
            } else {
               return p;
            }
         });
      case "AJOUTER_MEDICAMENT":
         return state.map((p) => {
            if (p.idPrescription == action.payload.idPrescription) {
               return {
                  ...p,
                  medicaments: [...p.medicaments, action.payload],
               };
            } else {
               return p;
            }
         });
      case "DELETE_MEDICAMENT":
         return state.map((p) => {
            if (p.idPrescription === action.payload.idPrescription) {
               return {
                  ...p,
                  medicaments: p.medicaments.filter(
                     (m) => m.idMedicament != action.payload.idMedicament
                  ),
               };
            } else {
               return p;
            }
         });
      case "MODIFIER_MEDICAMENT":
         return state.map((p) => {
            if (p.idPrescription == action.payload.idPrescription) {
               return {
                  ...p,
                  medicaments: p.medicaments.map((m) => {
                     if (m.idMedicament == action.payload.idMedicament) {
                        return action.payload;
                     } else {
                        return m;
                     }
                  }),
               };
            } else {
               return p;
            }
         });
      default:
         return state;
   }
};
export default PrescriptionReducer;
