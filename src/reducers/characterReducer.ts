import { IActionCharacter, ICharacterState } from "../context/types";


export const characterReducer = (state: ICharacterState, action: IActionCharacter) => {
    const { type, payload } = action;


    switch(type){
        case 'UPDATE_CHARACTERS': return {...state, characters: payload};
        case 'LIST_CHARACTERS': {
            return state;
        } 
        case 'SELECT_CHARACTER': {
            return state;
        } 
        default:  {
            return state;
        } 

    }



}