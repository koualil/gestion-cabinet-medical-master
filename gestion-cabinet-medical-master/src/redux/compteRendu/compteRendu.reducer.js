const INITIAL_STATE = [];

const CompteRenduReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_COMPTE_RENDU_DATA":
         return action.payload;
      case "ADD_COMPTE_RENDU":
         return [...state, action.payload];
      case "DELETE_COMPTE_RENDU":
         return state.filter(
            (c) => c.idCompteRendu != action.payload.idCompteRendu
         );
      default:
         return state;
   }
};
export default CompteRenduReducer;
