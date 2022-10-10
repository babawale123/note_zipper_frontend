import { NOTE_CREATE_FAILED, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAILED, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_UPDATE_FAILED, NOTE_UPDATE_REQUEST, NOTE_UPDATE_SUCCESS, NOTE_VIEWSONE_FAILED, NOTE_VIEWSONE_REQUEST, NOTE_VIEWSONE_SUCCESS, NOTE_VIEWS_FAILED, NOTE_VIEWS_REQUEST, NOTE_VIEWS_SUCCESS } from "../constants/noteConstant";

export const getNoteReducer = (state={notes:[]}, action) =>{
    switch (action.type) {
        case NOTE_VIEWS_REQUEST:
            return {loading:true};
        case NOTE_VIEWS_SUCCESS:
            return {loading:false, notes:action.payload};
        case NOTE_VIEWS_FAILED:
            return {loading:false, error:action.payload}; 
        default:
           return state;
    }
}

export const getOneNoteReducer = (state={}, action) =>{
    switch (action.type) {
        case NOTE_VIEWSONE_REQUEST:
            return {loading:true}
        case NOTE_VIEWSONE_SUCCESS:
            return {loading:false,  success:true}
        case NOTE_VIEWSONE_FAILED:
            return {loading:false, error:action.payload} 
        default:
            return state;
    }
}

export const updateNoteReducer = (state={}, action) =>{
    switch (action.type) {
        case NOTE_UPDATE_REQUEST:
            return {loading:true}
        case NOTE_UPDATE_SUCCESS:
            return {loading:false, success:true}
        case NOTE_UPDATE_FAILED:
            return {loading:false, error:action.payload}    
        default:
           return state;
    }
}
export const deleteNoteReducer = (state={}, action) => {
    switch (action.type) {
        case NOTE_DELETE_REQUEST:
            return {loading:true}
        case NOTE_DELETE_SUCCESS:
            return {loading:false, success:true}
        case NOTE_DELETE_FAILED:
            return {loading:false, error:action.payload}    
        default:
            return state;
    }
}

export const createNoteReducer = (state={}, action) =>{
    switch (action.type) {
        case NOTE_CREATE_REQUEST:
            return {loading:true}
        case NOTE_CREATE_SUCCESS:
            return {loading:false, success:true}
        case NOTE_CREATE_FAILED:
            return {loading:false, error:action.payload}    
        default:
            return state;
    }
}