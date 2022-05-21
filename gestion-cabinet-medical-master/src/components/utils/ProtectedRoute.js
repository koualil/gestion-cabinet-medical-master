import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ type, component: Component, ...othersProps }) {
   const user = useSelector((state) => state.user);
   return (
      <Route
         {...othersProps}
         render={(props) =>
            user.currentUser && user.type === type ? (
               <Component {...props} />
            ) : (
               <Redirect to="/login" />
            )
         }
      />
   );
}

export default ProtectedRoute;
