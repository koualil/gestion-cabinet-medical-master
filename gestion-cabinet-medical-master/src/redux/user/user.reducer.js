const INITIAL_STATE = {
   currentUser: null,
   type: "",
};

const UserReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_CURRENT_USER":
         if (action.payload.currentUser) {
            localStorage.setItem("user", JSON.stringify(action.payload));
         } else {
            localStorage.removeItem("user");
         }
         return {
            ...state,
            currentUser: action.payload.currentUser,
            type: action.payload.type,
         };

      default:
         return state;
   }
};

export default UserReducer;
