const INITIAL_STATE = {
   active: false,
   message: "Default notification",
   time: 0,
};

const NotificationReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_NOTIFICATION_ON":
         return {
            active: true,
            message: action.payload.message,
            time: action.payload.time,
         };
      case "SET_NOTIFICATION_OFF":
         return {
            active: false,
            message: "",
            time: 0,
         };
      default:
         return state;
   }
};

export default NotificationReducer;
