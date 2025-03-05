import { addElemArray, remElemArray } from "../Utils/Utils";

export const ADD_FAV = "ADD_FAV";
export const REM_FAV = "REM_FAV";
export const SAV_DET = "SAV_DET";

const initialState = {
    favCharacters: [],
    dataChar: {}
}
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, favCharacters: addElemArray(state.favCharacters, action.id) };

        case REM_FAV:
            return { ...state, favCharacters: remElemArray(state.favCharacters, action.id) };

        case SAV_DET:
            return { ...state, dataChar: action.data };

        default:
            return state
    }
}



export default reducers;