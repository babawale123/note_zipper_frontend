import axios from "axios"
import { NOTE_CREATE_FAILED, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAILED, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_UPDATE_FAILED, NOTE_UPDATE_REQUEST, NOTE_UPDATE_SUCCESS, NOTE_VIEWS_FAILED, NOTE_VIEWS_REQUEST, NOTE_VIEWS_SUCCESS } from "../constants/noteConstant"

export const allNote = () =>async(dispatch,getState) =>{
    try {
        dispatch({type:NOTE_VIEWS_REQUEST})

    const {userLogin:{userInfo}} = getState()
    const config = {
        headers:{
            Authorization:` Bearer ${userInfo.token}`
        }
    }
    const {data} = await axios.get(`http://localhost:5000/api/notes`,config)
    dispatch({type:NOTE_VIEWS_SUCCESS, payload:data.note})
    console.log(data.note)

    } catch (error) {
        dispatch({
            type:NOTE_VIEWS_FAILED,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}

export const update = (id,title,content,category) => async(dispatch,getState)=>{
    try {
        dispatch({type:NOTE_UPDATE_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`,
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.put(`http://localhost:5000/api/notes/${id}`,{title,content,category},config)
        dispatch({type:NOTE_UPDATE_SUCCESS, payload:data.updatedNote})
    } catch (error) {
        dispatch({
            type:NOTE_UPDATE_FAILED,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}
export const delNote = (id) => async(dispatch,getState) =>{
    try {
        dispatch({type:NOTE_DELETE_REQUEST})
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.delete(`http://localhost:5000/api/notes/${id}`,config)
        dispatch({type:NOTE_DELETE_SUCCESS, payload:data.note})
    } catch (error) {
        dispatch({
            type:NOTE_DELETE_FAILED,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}

export const create = (title,content,category) => async(dispatch,getState) =>{
    try {
        dispatch({type:NOTE_CREATE_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`,
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post(`http://localhost:5000/api/notes`,{title,content,category},config)
        dispatch({type:NOTE_CREATE_SUCCESS, payload:data.savedNote})
    } catch (error) {
        dispatch({
            type:NOTE_CREATE_FAILED,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}