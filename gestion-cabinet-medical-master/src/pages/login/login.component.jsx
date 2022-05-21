import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setCurrentUser } from "../../redux/user/user.actions";
import "./login.styles.scss";

function Login() {
   // const [Route, setRoute] = useState("login");

   const dispatch = useDispatch();
   const history = useHistory();

   const onLogin = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");

      const randomUser = {
         idUtilisateur: 155,
         cin: "BE44564",
         nom: "prof ",
         prenom: "koubi",
         email: "koubi@mail.com",
         situationFamilliale: "celibataire",
         genre: "male",
         tel: "09876543245",
         adresse: "dsqsdqdsqd",
         imageProfile: "/uploads/images/625b52a7c88b4.jpg",
      };

      if (email === "medecin") {
         dispatch(setCurrentUser({ currentUser: randomUser, type: "medecin" }));

         history.push("/");
      } else if (email === "secretaire") {
         history.push("/");
         dispatch(
            setCurrentUser({ currentUser: randomUser, type: "secretaire" })
         );
      }
   };

   return (
      <div className="bg__lightgray pt-24">
         <div className="max-w-2xl mx-auto border p-8 bg-white shadow-md">
            <form className="form__1" onSubmit={onLogin}>
               <h2 className="text-center mb-12">Cabinet Médical</h2>

               <div>
                  <label htmlFor="email">email</label>
                  <input type="text" name="email" id="" />
               </div>
               <div className="">
                  <label htmlFor="email">password</label>
                  <input type="password" name="password" id="" />
               </div>
               <div className="mb-8">
                  <a className="lien font-light" href="">
                     mot de passe oublié ?
                  </a>
               </div>
               <div className="">
                  <button type="submit" className="button__3 text-2xl">
                     login
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Login;
