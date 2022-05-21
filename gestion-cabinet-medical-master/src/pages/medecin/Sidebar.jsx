import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
   useEffect(() => {
      const navLinks = document.querySelectorAll(".sidebar .menu .link");

      navLinks.forEach((link) => {
         link.addEventListener("click", (e) => {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });
            console.log("aze");
            e.target.classList.add("active");
         });
      });
   }, []);

   return (
      <>
         <input
            className="toggle__checkbox"
            type="checkbox"
            id="toggle-sidebar"
         />
         <label
            id="sidebar-button"
            className="sidebar__button"
            htmlFor="toggle-sidebar"
         >
            <span className="sidebar__icon"></span>
         </label>
         <div className="sidebar h-screen">
            <div className="p-8 mb-24">
               <h4 className="text-center font-semibold">Medical</h4>
            </div>
            <ul className="menu">
               <Link className="link active" to="/medecin">
                  <i className="fas fa-home"></i> Home
               </Link>
               <Link className="link" to="/medecin/profile">
                  <i className="fas fa-user"></i> Profile
               </Link>
               <Link className="link" to="/medecin/rendez-vous">
                  <i className="fas fa-user"></i> Mes Rendez-vous
               </Link>
               <Link className="link" to="/medecin/patient">
                  <i className="fas fa-user"></i> Consultations
               </Link>
               <a className="link">
                  <i className="fas fa-sign-out-alt"></i> log out
               </a>
            </ul>
         </div>
      </>
   );
};

export default Sidebar;
