export const setPatientsData = (data) => ({
   type: "SET_PATIENTS_DATA",
   payload: data,
});

export const ajouterPatient = (data) => ({
   type: "AJOUTER_PATIENT",
   payload: data,
});

export const updatePatient = (data) => ({
   type: "UPDATE_PATIENT",
   payload: data,
});

export const deletePatient = (data) => ({
   type: "DELETE_PATIENT",
   payload: data,
});
