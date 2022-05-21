const INITIAL_STATE = [];

const ExamenReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_EXAMEN_DATA":
         return action.payload;
      case "ADD_EXAMEN":
         return [...state, action.payload];
      case "DELETE_EXAMEN":
         return state.filter((c) => c.idExamen != action.payload.idExamen);
      default:
         return state;
   }
};
export default ExamenReducer;
