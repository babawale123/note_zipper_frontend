import {createStore,combineReducers,applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { createNoteReducer, deleteNoteReducer, getNoteReducer, updateNoteReducer } from "./Reducer/noteReducer";
import { userLoginReducer, userRegisterReducer } from "./Reducer/userReducer";


const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    listNotes:getNoteReducer,
    updateNote:updateNoteReducer,
    deleteNote:deleteNoteReducer,
    createNote:createNoteReducer,

})

const userInfoFromStorage =  localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null

const initialState = {
    userLogin :{userInfo:userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
