const INITIAL_STATE = [];

const ConsultationReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_CONSULTATION_DATA":
         return action.payload;
      case "UPDATE_CONSULTATION":
         return state.map((c) => {
            if (c.idConsultation == action.payload.idConsultation) {
               return {
                  ...c,
                  ...action.payload,
               };
            } else {
               return c;
            }
         });
      default:
         return state;
   }
};
export default ConsultationReducer;
