import {
    ADD_FAV,
    REM_FAV,
    SAV_DET
} from "./reducer";


export const addFav = (dispatch, id) =>
    dispatch({
        type: ADD_FAV,
        id
    });


export const remFav = (dispatch, id) =>
    dispatch({
        type: REM_FAV,
        id
    });

export const saveDetails = (dispatch, data) =>
    dispatch({
        type: SAV_DET,
        data
    });



