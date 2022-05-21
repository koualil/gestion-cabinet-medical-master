import CompteRenduList from "../compte-rendu-list/compte-rendu-list";
import ExamenList from "../examen-list/examen-list";

export const Diagnostique = ({ idConsultation }) => {
   return (
      <>
         <div>
            <CompteRenduList idConsultation={idConsultation} />
            <ExamenList idConsultation={idConsultation} />
         </div>
      </>
   );
};
