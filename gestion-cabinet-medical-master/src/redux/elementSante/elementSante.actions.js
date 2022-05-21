export const setElementsSanteData = (data) => ({
   type: "SET_ELEMENT_SANTE_DATA",
   payload: data,
});

export const ajouterElementSante = (data) => ({
   type: "AJOUTER_ELEMENT_SANTE",
   payload: data,
});

export const modifierElementSante = (data) => ({
   type: "MODIFIER_ELEMENT_SANTE",
   payload: data,
});

export const deleteElementSante = (data) => ({
   type: "DELETE_ELEMENT_SANTE",
   payload: data,
});
