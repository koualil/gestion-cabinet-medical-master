import { createSelector } from "reselect";

export const selectElementSanteByPatient = createSelector(
   [(state) => state.elementSante, (state, idPatient) => idPatient],
   (elem, idPatient) => elem.filter((e) => e.idPatient == idPatient)
);
