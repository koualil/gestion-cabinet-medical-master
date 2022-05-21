import React, { useState } from "react";
import "./modalDeleteCss.css"

export default function ModalDelete(props) {
  
 console.log(props.toggle);
  return (
    <>
      
      {props.toggle ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-auto my-6 mx-auto">
              {/*content*/}
              <div className="widthh border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none width">
                {/*header*/}
                <div className=" justify-between p-1 border-b border-solid border-slate-200 rounded-t">
                  
                  <button
                    className="float-right text-4xl font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModalDelete(false)}
                  >
                    <span className="text-red-600">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <p className="my-4  text-[px] leading-relaxed">
                    Voulez-vous supprimer l'anrécédent ! 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="mr-8 buttonDelete "
                    type="button"
                    onClick={() => props.setShowModalDelete(false)}
                  >
                    Non
                  </button>
                  <button
                    className="buttonDelete" 
                    type="button"
                    onClick={() => props.setShowModalDelete(false) }
                  >
                    Oui
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
