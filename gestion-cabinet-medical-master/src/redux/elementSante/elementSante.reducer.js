const INITIAL_STATE = [];

const ElementSanteReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_ELEMENT_SANTE_DATA":
         return action.payload;
      case "AJOUTER_ELEMENT_SANTE":
         return [...state, action.payload];
      case "DELETE_ELEMENT_SANTE":
         return state.filter((e) => e.idElement != action.payload.idElement);
      case "MODIFIER_ELEMENT_SANTE":
         return state.map((e) => {
            if (e.idElement == action.payload.idElement) {
               return action.payload;
            } else {
               return e;
            }
         });

      default:
         return state;
   }
};
export default ElementSanteReducer;
