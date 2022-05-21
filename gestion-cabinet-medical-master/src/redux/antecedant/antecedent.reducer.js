const INITIAL_STATE = [];

const AntecedentReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_ANTECEDENT_DATA": 
         return action.payload;
      case "POST_ANTECEDENT":
         return [ ...state, action.payload];
      case "DELETE_ANTECEDENT":
         return state.filter(
            (c) => c.idAntecedent != action.payload.idAntecedent
         ); 
      case "UPDATE_ANTECEDENT":
         return state.map(Element=>{
            if(Element.idAntecedent === action.payload.idAntecedent)
            return action.payload;
               return Element;
         })
      
      default:
         return state;
   }
};
export default AntecedentReducer;
