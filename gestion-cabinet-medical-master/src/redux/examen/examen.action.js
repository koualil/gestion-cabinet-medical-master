export const setExamenData = (data) => ({
   type: "SET_EXAMEN_DATA",
   payload: data,
});

export const ajouterExamen = (data) => ({
   type: "ADD_EXAMEN",
   payload: data,
});
export const deleteExamen = (data) => ({
   type: "DELETE_EXAMEN",
   payload: data,
});
