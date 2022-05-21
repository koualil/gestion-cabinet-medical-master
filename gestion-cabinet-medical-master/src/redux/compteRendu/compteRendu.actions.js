export const setCompteRenduData = (data) => ({
   type: "SET_COMPTE_RENDU_DATA",
   payload: data,
});

export const ajouterCompteRendu = (data) => ({
   type: "ADD_COMPTE_RENDU",
   payload: data,
});
export const deleteCompteRendu = (data) => ({
   type: "DELETE_COMPTE_RENDU",
   payload: data,
});
