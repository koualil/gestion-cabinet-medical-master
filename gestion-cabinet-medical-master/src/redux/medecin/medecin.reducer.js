const INITIAL_STATE = [];

const MedecinReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_MEDECIN_DATA":
         return action.payload;
      default:
         return state;
   }
};

export default MedecinReducer;
