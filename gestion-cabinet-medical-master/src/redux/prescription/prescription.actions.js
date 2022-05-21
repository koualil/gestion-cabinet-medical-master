export const setPrescriptionData = (data) => ({
   type: "SET_PRESCRIPTION_DATA",
   payload: data,
});

export const ajouterPrescription = (data) => ({
   type: "AJOUTER_PRESCRIPTION",
   payload: data,
});

export const modifierPrescription = (data) => ({
   type: "MODIFIER_PRESCRIPTION",
   payload: data,
});

export const ajouterMedicament = (data) => ({
   type: "AJOUTER_MEDICAMENT",
   payload: data,
});

export const deleteMedicament = (data) => ({
   type: "DELETE_MEDICAMENT",
   payload: data,
});

export const modifierMedicament = (data) => ({
   type: "MODIFIER_MEDICAMENT",
   payload: data,
});
