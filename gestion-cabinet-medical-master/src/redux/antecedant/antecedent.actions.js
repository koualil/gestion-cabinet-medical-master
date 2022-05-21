export const setAntecedentData =(data)=>{
    return {
        type : 'SET_ANTECEDENT_DATA',
        payload : data
    }
}

export const postAntecedent =(data)=>{
    return {
        type : 'POST_ANTECEDENT',
        payload : data
    }
}

export const updateAntecedent =(data)=>{
    return {
        type : 'UPDATE_ANTECEDENT',
        payload : data
    }
}

export const deleteAntecedent =(data)=>{
    return {
        type : 'DELETE_ANTECEDENT',
        payload : data
    }
}